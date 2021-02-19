import React from 'react';

const Home = () => {
    const stil = {
        borderBottom: "2px solid red",
        display: "inline-block",
        width: "25%",
      };
      return (
        <>
          <h3 className="mt-5">Home</h3>
          <div style={stil}></div>
          <p>
            Pagina <em>Home</em>.
          </p>
        </>
      );
}

export default Home;