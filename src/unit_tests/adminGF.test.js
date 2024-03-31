const { JSDOM } = require('jsdom');

// Set up a simulated DOM environment
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

// Import the functions to test
const { editCourse, deleteCourse, addNewCourse } = require('../scripts/helpers/adminGF.js');

describe('editCourse function', () => {
    // Mock global functions and fetch
    global.prompt = jest.fn(() => 'Mocked input');
    global.fetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.alert = jest.fn();

    beforeEach(() => {
        prompt.mockClear();
        fetch.mockClear();
        alert.mockClear();
    });

    test('should display an error message for invalid input', async () => {
        prompt.mockReturnValueOnce('');
        prompt.mockReturnValueOnce('100');

        await editCourse(123);

        expect(prompt).toHaveBeenCalledTimes(2);
        expect(alert).toHaveBeenCalledWith('Invalid input. Please enter a valid course name and price.');
        expect(fetch).not.toHaveBeenCalled();
    });

    test('should send a PUT request with valid input', async () => {
        prompt.mockReturnValueOnce('New Course Name');
        prompt.mockReturnValueOnce('100');

        fetch.mockImplementationOnce(() => Promise.resolve({ ok: true }));

        await editCourse(123);

        expect(prompt).toHaveBeenCalledTimes(2);
        expect(fetch).toHaveBeenCalledWith(`/courses/123`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseName: 'New Course Name',
                price: 100
            })
        });
        expect(alert).toHaveBeenCalledWith('Course updated successfully');
    });
});

describe('deleteCourse function', () => {
    test('should send a DELETE request and remove course row from UI upon successful deletion', async () => {
        global.confirm = jest.fn(() => true);

        global.fetch = jest.fn(() => Promise.resolve({ ok: true }));

        const courseRow = document.createElement('div');
        courseRow.id = 'courseRow_123';
        document.body.appendChild(courseRow);

        const removeSpy = jest.spyOn(courseRow, 'remove');

        await deleteCourse(123);

        expect(confirm).toHaveBeenCalledWith('Are you sure you want to delete this course?');
        expect(fetch).toHaveBeenCalledWith(`/courses/123`, {
            method: 'DELETE'
        });
        expect(document.getElementById('courseRow_123')).toBeNull();
        expect(removeSpy).toHaveBeenCalled();

        document.body.removeChild(courseRow);
    });

    test('should not send a DELETE request if user cancels confirmation', async () => {
        global.confirm = jest.fn(() => false);

        global.fetch = jest.fn(() => Promise.resolve({ ok: true }));

        await deleteCourse(123);

        expect(confirm).toHaveBeenCalledWith('Are you sure you want to delete this course?');
        expect(fetch).not.toHaveBeenCalled();
    });

    test('should handle failed DELETE request', async () => {
        global.confirm = jest.fn(() => true);

        global.fetch = jest.fn(() => Promise.resolve({ ok: false, statusText: 'Not Found' }));

        await deleteCourse(123);

        expect(confirm).toHaveBeenCalledWith('Are you sure you want to delete this course?');
        expect(fetch).toHaveBeenCalledWith(`/courses/123`, {
            method: 'DELETE'
        });
        expect(alert).toHaveBeenCalledWith('Failed to delete course.');
    });

    test('should handle error in fetch call', async () => {
        global.confirm = jest.fn(() => true);

        global.fetch = jest.fn(() => Promise.reject(new Error('Network Error')));

        await deleteCourse(123);

        expect(confirm).toHaveBeenCalledWith('Are you sure you want to delete this course?');
        expect(fetch).toHaveBeenCalledWith(`/courses/123`, {
            method: 'DELETE'
        });
        expect(alert).toHaveBeenCalledWith('Error deleting course.');
    });
});

describe('addNewCourse function', () => {
    test('should add a new course link to the dropdown content when a valid course name is entered', () => {
        document.getElementById = jest.fn(() => ({ value: 'New Course' }));

        const dropdownContent = document.createElement('div');
        dropdownContent.id = 'dropdownContent1';

        addNewCourse(1);

        const newCourseLink = dropdownContent.querySelector('a');
        expect(newCourseLink.textContent).toBe('New Course');
        expect(newCourseLink.getAttribute('data-course-id')).toBe('1');
    });

    test('should display an alert when no course name is entered', () => {
        document.getElementById = jest.fn(() => ({ value: '' }));
        global.alert = jest.fn();

        addNewCourse(1);

        expect(global.alert).toHaveBeenCalledWith('Please enter a course name.');
    });
});

