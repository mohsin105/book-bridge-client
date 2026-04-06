import React from 'react';
import ExtensionCard from './ExtensionCard';

const ExtensionList = ({extensionList,recordObj}) => {
    return (
        <div className='space-y-4 p-2 bg-cyan-50 rounded-md'>
            {extensionList.map(extension =>(
                <div key={extension.id}>
                    <ExtensionCard extension={extension} recordObj={recordObj}/>
                </div>
            ))}
        </div>
    );
};

export default ExtensionList;