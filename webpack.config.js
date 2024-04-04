const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        signup: './src/pages/signup/signup.js',
        login: './src/pages/login/login.js',
        home: './src/pages/home/home.js',
        userReCourses: './src/pages/userRe-courses/StyleCourses.js',
        adminLogin: './src/pages/adminlogin/adminLogin.js',
        userPlans: './src/pages/user-plan/plans.js',
        profile: './src/pages/profile/profile.js',
        adminReCourses: './src/pages/admin-re-courses/AdminRE_Courses.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sign Up',
            filename: 'signup.html',
            template: './src/pages/signup/signup.html',
            chunks: ['signup'],
        }),
        new HtmlWebpackPlugin({
            title: 'Log In',
            filename: 'login.html',
            template: './src/pages/login/login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'home.html',
            template: './src/pages/home/home.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            title: 'Gwendolyn\'s guidance',
            filename: 'UserHome.html',
            template: './src/pages/user-home/UserHome.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            title: 'Courses',
            filename: 'UserRe_Courses.html',
            template: './src/pages/userRe-courses/UserRe_Courses.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'Admin Login',
            filename: 'AdminLogin.html',
            template: './src/pages/adminlogin/AdminLogin.html',
            chunks: ['adminLogin'],
        }),
        new HtmlWebpackPlugin({
            title: 'User Plan',
            filename: 'UserPlan.html',
            template: './src/pages/user-plan/plans.html',
            chunks: ['userPlans'],
        }),
        new HtmlWebpackPlugin({
            title: 'Profile',
            filename: 'Profile.html',
            template: './src/pages/profile/Profile.html',
            chunks: ['profile'],
        }),
        new HtmlWebpackPlugin({
            title: 'User GF Course',
            filename: 'userGF_Courses.html',
            template: './src/pages/user-gf-courses/userGF_Courses.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'Real Estate Courses',
            filename: 'real-estate-courses.html',
            template: './src/pages/real-estate-courses/real-estate-courses.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'Real Estate Courses',
            filename: 'RE_Courses.html',
            template: './src/pages/re-courses/Re_Courses.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'General Finance Courses',
            filename: 'GF_Courses.html',
            template: './src/pages/gf-courses/GF_Courses.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'General Finance Courses',
            filename: 'general-finance-courses.html',
            template: './src/pages/general-finance-courses/general-finance-courses.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'Course Details',
            filename: 'course-details.html',
            template: './src/pages/course-details/course-details.html',
            chunks: ['userReCourses'],
        }),
        new HtmlWebpackPlugin({
            title: 'Admin RE Courses',
            filename: 'AdminRE_Courses.html',
            template: './src/pages/admin-re-courses/AdminRE_Courses.html',
            chunks: ['adminReCourses'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}