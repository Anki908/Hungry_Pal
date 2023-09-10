import { useState } from "react";

const Section = ({title , description , isVisible , setVisible}) => {
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible?(
                    <button
                      onClick = {() => setVisible(false)}
                      className = "cursor-pointer underline"
                    >
                        Hide
                    </button>
                ) : (
                    <button
                      onClick = {() => setVisible(true)}
                      className = "cursor-pointer underline"
                    >
                        Show
                    </button>
                )
            }
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const Instamart = () => {

    const [visibleSection , setVisibleSection] = useState("About");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"}
                description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always "}
                isVisible = {visibleSection === "About"}
                setVisible = {() => setVisibleSection("About")}
                
            />
            <Section
                title={"Team Instamart"}
                description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always "}
                isVisible = {visibleSection === "Team"}
                setVisible = {() => setVisibleSection("Team")}
            />
            <Section
                title={"Carrers"}
                description={"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always"} 
                isVisible = {visibleSection === "Carrers"}
                setVisible = {() => setVisibleSection("Carrers")}
            />
        
        </div>
    );
}
export default Instamart;