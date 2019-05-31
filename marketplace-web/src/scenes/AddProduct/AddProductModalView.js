import React from 'react';
import T from 'prop-types';
import s from './AddProduct.module.scss';
import { Formik, Field, Form } from 'formik';
import { UploadInput, ImgItem } from './components';


function AddProduct({onSubmit, initialValues, validationSchema, history, uploadImage, imagesList }) {

    let back = e => {
        e.stopPropagation();
        history.goBack();
      };

    return (
        <>
            <div onClick={back} className={s.backModal} ></div>
            <div className={s.containerModal} >
                <div className={s.formTitle}>Add product</div>            
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    render={({errors, touched})=>{
                        
                        return (
                            <Form>                        
                                <div className={s.headerFild}>
                                    <label htmlFor="title">
                                        Title                           
                                    </label>
                                    *
                                    {errors.title && touched.title ? <div> {errors.title}</div> : null}
                                </div>
                                <Field                             
                                    name="title" 
                                    placeholder="For example: Los Angeles, CA"                                                                 
                                />
                                <div className={s.headerFild}>
                                    <label htmlFor="location">
                                        Location                           
                                    </label>
                                    *
                                    {errors.location && touched.location ? <div> {errors.location}</div> : null}
                                </div>                         
                                <Field                            
                                    name="location" 
                                    placeholder="For example: Ternopil"                                 
                                />   
                                <label htmlFor="description">
                                    Description                            
                                </label>   
                                <Field 
                                    name="description" 
                                    placeholder="For example: Iron man suit"   
                                    component="textarea"                              
                                />
                                <label htmlFor="photos">
                                    Photos                           
                                </label>
                                <div className={s.containerPhotos}>                                                                                                      
                                    {imagesList.map((it) => <ImgItem src={it} key={it} />)}                                                                      
                                    { imagesList.length < 7? <UploadInput onChange={uploadImage} /> : null }
                                </div>
                                <div className={s.headerFild}>
                                    <label htmlFor="price">
                                        Price                           
                                    </label>
                                    *
                                    {errors.price && touched.price ? <div> {errors.price}</div> : null}
                                </div>     
                                <Field 
                                    name="price"                                                                        
                                    placeholder="For example: 0"                                                                                               
                                />    
                                <button type="submit" >Submit</button>              
                            </Form>
                        )}
                    }
                />            
            </div>
        </>    
    );
};

AddProduct.protoType = {

};

export default AddProduct;