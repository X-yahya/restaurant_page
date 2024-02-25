export default class createElem
{
    constructor(type , attributes , childs)
    {
        this.type = type ; 
        this.attributes = {} ; 
        this.childs = [] ;
    }

    addAttributes(attributes)
    {
        for(const i of Object.keys(attributes))
        {
            this.attributes[i] = attributes[i] ;
        }
        return this ; 
    }

    addChild(child)
    {
        this.innerText = undefined
        this.childs.push(child) ; 
        return this ; 
    }


    setInnerText(string)
    {
        this.childs = [] ; 
        this.innerText = string ; 
        return this ; 
    }

    load()
    {
        const DomElement = document.createElement(this.type) ; 
        
        for(const i of Object.keys(this.attributes))
        {
            DomElement.addAttributes(i , this.attributes[i]) ;
        }

            if (this.innerText === undefined) {
                for (const child of this.children) {
                DomElement.appendChild(child.build());
                }
            } else {
                let DominnerText = document.createTextNode(this.innerText);
                DomElement.appendChild(DominnerText);
            }
        }

}