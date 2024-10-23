// @flow 
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr, AdidasItem } from './Adidas';
import { pumaArr, PumaItem } from './Puma';

type Props = {
    
};

type crossModelType = {
    [key: string]: (AdidasItem[] | PumaItem[])
}

const crossModel:crossModelType = {
    Adidas: adidasArr,
    Puma: pumaArr
}

export const Model = (props: Props) => {
    // const params = useParams()
    const {model, id} = useParams()
    // {model: 'Adidas', id: '0'}

    const currentModel = model 
                        ? crossModel[model].find(el=>el.id === Number(id))
                        : null
    
    return (<div style={{textAlign:'center'}}>
               {
                currentModel
                ? <>
                     <h2>{currentModel?.model}</h2> 
                     <h3>{currentModel?.price}</h3>
                     <img src={currentModel?.picture}
                        alt={currentModel?.model}
                        style={{width:'600px', height:'auto', marginRight:'10px'}}
                    />
                </>
                : <h2>Takoy modeli netu</h2>
               } 
                
               
            </div>);
};
 