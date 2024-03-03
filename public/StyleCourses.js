    function toggleDropdown(clickedElement) {
        var dropdown = clickedElement.closest('.dropdown');

        if (isOwned(clickedElement)) {
            var dropdownContent = dropdown.querySelector('.dropdown-content');

            dropdown.classList.toggle('active');
            dropdownContent.classList.toggle('hover');

            var dropdown2 = document.getElementById('dropdown2');

            if (dropdown1.classList.contains('active')) {
                dropdown2.classList.add('move-down');
            } else {
                dropdown2.classList.remove('move-down');
            }
        }
    }

    function buyNow(button) {
        
        button.innerHTML = "Owned";
    
        var dropdown = button.closest('.dropdown');
        dropdown.classList.add('owned');
    
        var lockIcon = dropdown.querySelector('.fa-lock');
    
        lockIcon.classList.remove('fa-lock');
        lockIcon.classList.add('fa-unlock');
        var priceTag = dropdown.querySelector('.price-tag');
        if (priceTag) {
            priceTag.style.display = 'none';
        }
    }
    
    function isOwned(clickedElement) {
        return clickedElement.closest('.dropdown').classList.contains('owned');
    }

    function displayPhrase()
    {
        document.getElementById("old").innerHTML = 'Module #1 - Principles of Finance'
    }

    function displayPhrase2()
    {
        document.getElementById("old2").innerHTML = 'Module #2 - Corporate Finance'
    }

    function REdisplayPhrase()
    {
        document.getElementById("REold").innerHTML = '&#9660 Module #1 - Principles and Practice'
    }

    function REdisplayPhrase2()
    {
        document.getElementById("REold2").innerHTML = '&#9660 Module #2 - Marketing Sales and Techniques'
    }