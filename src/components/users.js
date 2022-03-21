import React from "react";


const Users = () => {


    return (
<section className="users">
    <article className="user">
                <figure>
                    <img src="" alt="first last" />
                </figure>
                <div className="name">
                    <p>Mon nom est </p>
                    {/* <p>${user.titleName} ${user.firstName} ${user.lastName}</p> */}
                </div>
                <div className="hidden">
                    <div className="address">
                        <p><span>Rue :</span> <span>rue</span></p>
                        <p><span>Ville :</span> <span>city</span></p>
                        <p><span>Code Postal :</span>
                            <span>cp</span></p>
                        <p><span>Pays :</span> <span>country</span></p>
                    </div>
                    <div className="phone">
                        <p><span>Téléphone :</span> <span>phone</span>
                        </p>
                        <p><span>Mobile :</span> <span>cell</span></p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Users;