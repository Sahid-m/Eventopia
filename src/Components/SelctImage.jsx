import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function SelctImage(props) {

    SelctImage.propTypes = {
        updateImgeFnc: PropTypes.func.isRequired
    };

    const [imageURLS , setImageURLS] = useState([{
        id: 1,
        ImageName:  "People",
        ImageURL: "https://t3.ftcdn.net/jpg/02/87/35/70/360_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg",
        selected: false
    }, {
        id: 2,
        ImageName:  "Mountain",
        ImageURL: "https://i.ibb.co/zSgVg30/johannes-kopf-MVh5-Qquw-MVQ-unsplash.jpg", 
        selected: false
    }, {
        id: 3,
        ImageName:  "Hangout",
        ImageURL: "https://i.ibb.co/BLvVtj5/lucas-bordiao-05s-Id7-Ysk-K0-unsplash.jpg", 
        selected: false
    }, {
        id: 4,
        ImageName:  "Restaurant",
        ImageURL: "https://i.ibb.co/1dssNFq/jason-leung-zq-tpp54ur4-unsplash.jpg", 
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
                              return <div className="my-2  col-sm-2 col-md-3 " key={Img.id}>
                                  <img className={Img.selected ? `selected-img e-img` : ` e-img `} onClick={() => {handleSelect(Img.id,Img.ImageURL)}} src={Img.ImageURL} alt={Img.ImageName} />
                                    </div>
                          })}
                      
                  </div>
              </div>
        </div>
    </div>
  )
}
