exports.api = env => {
    let apiUrl = {
        dev: "http://localhost:3100",
        ci: "https://api-middle-ci.findoctor.com.ar",
        production: "https://api-middle-ci.findoctor.com.ar"
    };

    return apiUrl[env];
};
