import React from 'react';

const Button = ({action,children}) => {
    const bg_color={
        'create':'bg-emerald-600 hover:bg-emerald-700 border-emerald-900 text-white',
        'update':'bg-blue-600 hover:bg-blue-700 border-blue-900',
        'delete':'bg-rose-600 hover:bg-rose-700',
        'details':'bg-slate-200 hover:bg-slate-300',
        'action':'bg-cyan-400 hover:bg-cyan-600 border-cyan-900',
    }
    return (
        <button className={`rounded-md font-semibold p-4 border-2 ${bg_color[action]} shadow-xl`}>
            {children}
        </button>
    );
};

export default Button;