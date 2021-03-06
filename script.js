function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function () {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(self.text);
        });
        $('body').append(this.$element);
    }
}

var btn1 = new Button('Hello');
btn1.create();

var btn2 = new Button();
btn2.create();

var btn3 = new Button('Papapa');
btn3.create();

function Button2(text) {
    this.text = text;

}
//test braku self.
Button2.prototype = {
    create: function () {
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function () {
            alert(this.text);
        });
        $('body').append(this.$element);
    }
}

var btn4 = new Button2('Test');
btn4.create();