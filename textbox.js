function TextBox(formId , name = null , max = null , min = null , label = null){
    this.node = document.createElement("input");
    this.form = document.getElementById(formId)
    this.fName(name);
    this.fMax(max);
    this.fMin(min);
    this.fLabel(label);
    this.form.appendChild(this.fNode)
}


// This Code Will Add Name Property To Field
TextBox.prototype.fName = function (name){
    if (name !== null)
        this.node.setAttribute('name' , name)
}


// This Code Will Add Name Property To Field
TextBox.prototype.fMax = function (max){
    if (max !== null)
        this.node.setAttribute('max' , max)
}


// This Code Will Add Name Property To Field
TextBox.prototype.fMin = function (min){
    if (min !== null)
        this.node.setAttribute('min' , min)
}


// This Block Of Code Will ADD Label For Field
// The Final Result Of Code Will Be Complete Here
TextBox.prototype.fLabel = function (label) {

    // Add A Div That Includes Input And Label If 'Label' That We Passed To The Function !== Null
    if (label !== null) {
    this.cLabel = document.createElement('label')
    this.cLabel.innerText = label
    this.div = document.createElement('div')
    this.div.appendChild(this.cLabel)
    this.div.appendChild(this.node)
    this.fNode = this.div
        console.log('notnull')
    } else{
        this.fNode = this.node
    }
}


new TextBox('test' , 'name' , 20 , 10)




