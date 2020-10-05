


class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = "random text";
        document.body.append(newDiv);
        // newDiv.classList.add('newDivClass');
        console.log(this.bg);
        newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; 
        font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        console.log(newDiv.style);
        
    }
}

const option1 = new Options('50px', '400px', 'blue', '50px', 'center');
option1.createDiv();