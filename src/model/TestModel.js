var Test = /** @class */ (function () {
    function Test() {
        this.TEST = {
            'questaion': '', 'answer_1': '', 'answer_2': '', 'answer_3': '', 'correct': ''
        };
    }
    Test.prototype.addAQuestion = function () {
        this.questaion.push(this.TEST);
        this.TEST = { 'questaion': '', 'answer_1': '', 'answer_2': '', 'answer_3': '', 'correct': '' };
    };
    Test.prototype.getAllQuestions = function () {
        return this.questaion;
    };
    Test.prototype.initialaizeQuestions = function () {
        this.questaion = [];
    };
    return Test;
}());
export { Test };
//# sourceMappingURL=TestModel.js.map