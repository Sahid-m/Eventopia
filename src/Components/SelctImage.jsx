import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function SelctImage(props) {

    SelctImage.propTypes = {
        updateImgeFnc: PropTypes.func.isRequired
    };

    const [imageURLS , setImageURLS] = useState([{
        id: 1,
        ImageName:  "Birthday",
        ImageURL: "https://cdn.pixabay.com/photo/2016/11/18/15/46/birthday-1835443_1280.jpg",
        selected: false
    }, {
        id: 2,
        ImageName:  "Food",
        ImageURL: "https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg", 
        selected: false
    }, {
        id: 3,
        ImageName:  "Party",
        ImageURL: "https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg", 
        selected: false
    }, {
        id: 4,
        ImageName:  "Book",
        ImageURL: "https://cdn.pixabay.com/photo/2016/09/19/18/55/books-1680953_1280.jpg", 
        selected: false
    }, {
        id: 5,
        ImageName:  "Colleage Library",
        ImageURL: "https://cdn.pixabay.com/photo/2019/04/14/10/26/college-4126481_1280.jpg",
        selected: false
    }, {
        id: 6,
        ImageName:  "Hangout",
        ImageURL: "https://cdn.pixabay.com/photo/2017/06/02/17/47/friendship-2366955_1280.jpg",
        selected: false
    }, {
        id: 7,
        ImageName:  "TEST7",
        ImageURL: "https://placehold.co/1280x720",
        selected: false
    }])

    const [select, setSelect] = useState({
        id: 1,
        url: "https://placehold.co/1280x720"
    })

    const handleSelect = async (id,Imageurl) => {
        setSelect({
            id: id,
            url: Imageurl
        });

        setImageURLS((prevImageURLS) => {
            return prevImageURLS.map((img) =>
                img.id == id ? { ...img, selected: true } : {...img , selected: false}
            )
        })

        
    }

    
      useEffect(() => {
    props.updateImgeFnc(select.url);
  }, [select, props.updateImgeFnc]);
    

    


  return (
    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasTopLabel">Select Image</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
              <div className="container" >
                <div className="row" >
                      
                          {imageURLS.map((Img) => {
                              return <div className="my-2  col-sm-2 col-md-2 " key={Img.id}>
                                  <img className={Img.selected ? `selected-img e-img` : ` e-img `} onClick={() => {handleSelect(Img.id,Img.ImageURL)}} src={Img.ImageURL} alt={Img.ImageName} />
                                    </div>
                          })}
                      
                  </div>
              </div>
        </div>
    </div>
  )
}
