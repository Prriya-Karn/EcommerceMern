import { Fragment } from 'react'
import { NavLink } from 'react-router-dom';




const Menus = ({ menus, menuItems }) => {
    if (menus) {
        document.body.style.overflow = 'hidden';
        document.body.style.background = "rgba(0, 0, 0, 0.2)"
    } else {
        document.body.style.overflow = 'auto';
        document.body.style.background = "initial"
    }



    return (
        <Fragment>

        <div  className={`navbar-menus ${menus ? "block" : "hidden-custom"}`}>
                <div className="navbar-menu-inside">
                    <div className='menu-inside'>


                   {/* <div className=''>
                    <NavLink to="/t-shirts">
                     <h2 className='menus-head'>t-shirts</h2>
                    </NavLink>
                    <div className="menu-items">
                        <h2>relaxed fit</h2>
                        <h2>oversized fit</h2>
                        <h2>regular fit</h2>
                        <h2>sleeveless t-shirts</h2>
                        <h2>full sleeves t-shirts</h2>
                    </div>
                    </div>
                    
                    <div>
                    <NavLink></NavLink><h2 className='menus-head'>shirts</h2>
                    <div className="menu-items">
                        <h2>half sleeves shirt</h2>
                        <h2>full sleeves shirt</h2>
                        <h2>shaket shirt</h2>
                    </div>
                    </div>
                    
                    
                    <div>
                    <h2 className='menus-head'>polo</h2>
                    <div className="menu-items">
                        <h2>polo shirts</h2>
                    </div>
                    </div>
                    
                    
                    <div>
                    <h2 className='menus-head'>bottoms</h2>
                    <div className="menu-items">
                        <h2>joggers</h2>
                        <h2>carbo pants</h2>
                        <h2>shorts</h2>
                    </div>
                    </div>
                    
                    
                    <div>
                    <h2 className='menus-head'>winter wear</h2>
                    <div className="menu-items">
                        <h2>jackets</h2>
                        <h2>hoodies</h2>
                        <h2>sweat shirt</h2>
                        <h2>shaket shirt</h2>
                    </div>
                    </div>
                    
                    
                    <div>
                    <h2 className='menus-head'>women</h2>
                    <div className="menu-items">
                        <h2>crop tops</h2>
                        <h2>sleeve crop tops</h2>
                        <h2>cargo pants</h2>
                    </div>
                    </div>
                    
                    
                    
*/}
                        {
                            menuItems.map((e) => {
                                
                                return (
                                    <Fragment key={e.id}>
                                        {
                                            e.categories.map((e) => {
                                                
                                                return (
                                                    <Fragment key="">
                                                        <div className=''>
                                                            <NavLink to={`/${e.categoryName}`}>
                                                            <h2 className='menus-head'>{e.categoryName}</h2>
                                                            </NavLink>
                                                             {
                                                            
                                                                e.items.length != 0 ? <div className="menu-items block">
                                                                {
                                                                    e.items.map((item, idx) => {
                                                                     
                                                                        return(
                                                                            <Fragment key={idx}>
                                                                            <NavLink to={item}>
                                                                            <h2 key={idx}>{item}</h2>
                                                                            </NavLink>
                                                                            </Fragment>
                                                                        )
                                                                    })
                                                                }
                                                                </div>:""
                                                             }
                                                              
                                                            
                                                        </div>
                                                    </Fragment>

                                                )

                                            })
                                        }



                                    </Fragment>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Menus;




// <div className=''>
// <h2 className='menus-head'>t-shirts</h2>
// <div className="menu-items">
//     <h2>relaxed fit</h2>
//     <h2>oversized fit</h2>
//     <h2>regular fit</h2>
//     <h2>sleeveless t-shirts</h2>
//     <h2>full sleeves t-shirts</h2>
// </div>
// </div>

// <div>
// <h2 className='menus-head'>shirts</h2>
// <div className="menu-items">
//     <h2>half sleeves shirt</h2>
//     <h2>full sleeves shirt</h2>
//     <h2>shaket shirt</h2>
// </div>
// </div>


// <div>
// <h2 className='menus-head'>polo</h2>
// <div className="menu-items">
//     <h2>polo shirts</h2>
// </div>
// </div>


// <div>
// <h2 className='menus-head'>bottoms</h2>
// <div className="menu-items">
//     <h2>joggers</h2>
//     <h2>carbo pants</h2>
//     <h2>shorts</h2>
// </div>
// </div>


// <div>
// <h2 className='menus-head'>winter wear</h2>
// <div className="menu-items">
//     <h2>jackets</h2>
//     <h2>hoodies</h2>
//     <h2>sweat shirt</h2>
//     <h2>shaket shirt</h2>
// </div>
// </div>


// <div>
// <h2 className='menus-head'>women</h2>
// <div className="menu-items">
//     <h2>crop tops</h2>
//     <h2>sleeve crop tops</h2>
//     <h2>cargo pants</h2>
// </div>
// </div>


