class contentManager
{
    constructor (selector)
    {
        this.content = document.querySelector(selector) ; 
    }
    createDivElement(classname)
    {
        const div = document.createElement("div") ; 
        div.classList.add(classname) ; 
        return div ; 
    }
    createImgElement(src , width , height)
    {
        const img  = document.createElement("img") ; 
        img.src = src ; 
        img.width = width; 
        img.height = height ; 
        return img ; 
    }
    createVidElement(src , width , height,autoPlay,Loop,soundLevel)
    {
        const vid = document.createElement("video") ; 
        vid.autoplay = autoPlay;
        vid.loop = Loop ; 
        vid.soundLevel = soundLevel ;  
        return vid ; 
    }

    appendChildFunc(parent,childs) 
    {
        childs.forEach(child => {

            parent.appendChild(child) ; 
        });
    }

    


} ; 
export default contentManager ; 