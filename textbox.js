// NOTE : This Function Wrote With ES5
// We Can Use {Object} Parameter Instead Of Using One By One Parameter Passing For Function But Readability Of The Code Will Decreases
/**
 *
 * @param {string } formId
 * @param {string , null} name
 * @param {boolean} required
 * @param {string , null} value
 * @param {string , null} pattern - number , letter , n&l
 * @param {string , null} dirname
 * @param {boolean} disabled
 * @param {number , null} max
 * @param {number , null} min
 * @param {boolean} autocomplete
 * @param {string , null} placeholder
 * @param {boolean} readonly
 * @param {number , null} size
 * @param {string , null} label
 * @constructor
 */

// If We Don't Want To Use Specific Attribute In Our Field , We Can Use Null (For Numbers And String Types) Or False (For Boolean Type) In Input Of Our Function

function TextBox(formId , name = null , required = false , value = null , pattern = null , dirname = null , disabled = false , max = null , min = null , autocomplete = false ,placeholder = null, readonly = false , size = null ,label = null ){
    this.node = document.createElement("input");
    this.form = document.getElementById(formId)
    this.fName(name);
    this.fRequired(required);
    this.fValue(value);
    this.fPattern(pattern);
    this.fDirname(dirname);
    this.fDisabled(disabled);
    this.fMax(max);
    this.fMin(min);
    this.fAutocomplete(autocomplete)
    this.fPlaceholder(placeholder);
    this.fReadonly(readonly)
    this.fSize(size)
    this.fLabel(label);
    this.form.appendChild(this.fNode)
}


// This Code Will Add Name Property To Field
TextBox.prototype.fName = function (name){
    if (name !== null)
        this.node.setAttribute('name' , name)
}


//This Code Will Add Required Attribute To Field
TextBox.prototype.fRequired = function (required){
    if (required === true)
        this.node.required = true
}

// This Peace Of Code Will Add Value Attribute To Field
TextBox.prototype.fValue = function (value){
    if (value !== null)
        this.node.setAttribute('value' , value)
}


// This Peace Of Code Will Add Pattern (Regex) To Field
TextBox.prototype.fPattern = function (pattern){
    if (pattern === 'number'){
        this.node.setAttribute('pattern' , '^[0-9]*$')
    }else if(pattern === 'letter'){
        this.node.setAttribute('pattern' , '^[A-Za-z]*$')
    }else if(pattern === 'n&l'){
        this.node.setAttribute('pattern' , '^[A-Za-z0-9]*$')
    }
}

// This Code Will Add Dirname Attribute To Field
TextBox.prototype.fDirname = function (dirname){
    if (dirname !== null)
        this.node.setAttribute('dirname' , dirname)
}


//This Code Will Add Disabled Attribute To Field
TextBox.prototype.fDisabled = function (disabled){
    if (disabled === true)
        this.node.disabled = true
}


// This Code Will Add Name Property To Field
TextBox.prototype.fMax = function (max){
    if (max !== null)
        this.node.setAttribute('maxlength' , max)
}


// This Code Will Add Name Property To Field
TextBox.prototype.fMin = function (min){
    if (min !== null)
        this.node.setAttribute('minlength' , min)
}


// This Peace Of Code Will ADD Autocomplete Attribute To Field (Note That acceptable Values Of Autocomplete are `Off` And `On`
TextBox.prototype.fAutocomplete = function (autocomplete){
    if (autocomplete){
        this.node.autocomplete = 'on'
    }
}

// This Peace Of Code Will Add Placeholder For Field
TextBox.prototype.fPlaceholder = function (placeholder){
    if (placeholder !== null)
        this.node.setAttribute('placeholder' , placeholder)
}

// This Peace Of Code Will ADD Readonly Attribute To Field
TextBox.prototype.fReadonly = function (readonly){
    if (readonly)
        this.node.readOnly = true
}


// This Peace Of Code Will ADD Size Attribute To Field
TextBox.prototype.fSize = function (size) {
    if (size !== null)
        this.node.setAttribute('size' , size)
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


new TextBox('test' , 'name' , true , 'test' , 'number' , '?' , false , 20 , 10 , false , 'textbox' , true , 10)




