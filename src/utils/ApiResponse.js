class ApiResponse {
    constructor(statusCode, data, message = "success" ) {
        this.data = data;
        this.success = success;
        this.message = message;
        this.statusCode = statusCode;
    }
}