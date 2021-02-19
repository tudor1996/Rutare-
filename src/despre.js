import React from 'react';

const Despre = () => {
    const stil = {
        borderBottom: "2px solid green",
        display: "inline-block",
        width: "25%",
      };
      return (
        <>
          <h3 className="mt-5">Despre</h3>
          <div style={stil}></div>
          <p>
            Pagina <em>Despre</em>.
          </p>
        </>
      );
}

export default Despre;
