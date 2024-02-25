class CreateElement
{
    constructor(type , attributes , childs )
    {
        this.type = type ; 
        this.attributes = {} ; 
        this.childs = childs ; 
    }
    addAttributes(attributes)
    {
        for(const k in Object.keys(attributes))
        {
            this.attributes[k] = attributes[k] ; 
        }
        return this ; 
    }
    addChild(childElement)
    {
        this.innerText = undefined ; 
        this.childs.push(childElement); 
        return this ; 
    }
    SetTextContent(string)
    {
        this.childs = [] ; 
        this.innerText = string  ; 
        return this ; 
    }
    build()
    {
        let DomElement = document.createElement(this.type) ; 

        for(const i of Object.keys(this.attributes))
        {
            DomElement.addAttributes(i,this.attributes[i])  ;
        }

        if(this.innerText === undefined)
        {
            for(const child of this.childs)
            {
                DomElement.appendChild(child.build());
            }
        }
        else
        {
            let Dominnertext = document.createTextNode(this.innerText);
            DomElement.appendChild(Dominnertext);
        }
        return DomElement ; 
    }


}


export default CreateElement ; 