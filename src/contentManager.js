export default class element
{
   constructor(elementType)
   {
        this.elementType = elementType ; 
        this.attributes = {} ; 
        this.children = [] ;
   }
   addAttributes(attributes) 
   {
    for(const i in Object.keys(attributes))
    {
        this.attributes[i] = attributes[i] ;
    }
    return this ; 
   }
   SetTextContent(string)
   {
        this.children =  [] ; 
        this.innerHtml = string ; 
        return this ; 
   }
   build()
   {
    let DomElem = document.createElement(this.elementType) ; 
    for(const k of Object.keys(this.attributes))
    {
        DomElem.setAttributes(k , this.attributes[k]) ;
    }
    if(this.innerHtml == undefined)
    {
        for(const child of this.children)
        {
            DomElem.appendChild(child.build()) ; 
        }
    }
    else
    {
        let DomInnerHtml = document.createTextNode(this.innerHtml) ;
        DomElem.appendChild(DomInnerHtml) ; 
    }

   }
} ; 
