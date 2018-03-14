var User = /** @class */ (function () {
    // public  USER_ID
    // public  NAME
    // public  PHONE       
    // public  PASSWORD
    // public  PASSWORD_CONFIRM
    // public  MAIL
    // public  TYPE//'type':' ',=> 1=> for student , 2=>for teacher
    // public  GRADE
    // public  YEAR
    // public  IMAGE
    function User() {
        this.USER = {
            user_id: '',
            name: '',
            phone: '',
            password: '',
            password_confirm: '',
            mail: '',
            type: '',
            grade: '',
            grade_id: '',
            year_id: '',
            year: '',
            image: ''
        };
    }
    User.prototype.getuser = function () {
        return this.USER;
    };
    User.prototype.setuser = function (user) {
        console.log(user);
        this.USER_TYPE = user.type;
        this.USER = {
            user_id: user.user_id,
            name: user.name,
            phone: user.phone,
            password: user.password,
            password_confirm: user.password_confirm,
            mail: user.mail,
            type: user.type,
            grade: user.grade,
            grade_id: user.grade_id,
            year_id: user.year_id,
            year: user.year,
            image: user.image
        };
        // this.USER= user;
    };
    return User;
}());
export { User };
//# sourceMappingURL=UserModel.js.map