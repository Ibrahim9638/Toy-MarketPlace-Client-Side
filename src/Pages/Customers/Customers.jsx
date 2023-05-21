import React from "react";
import team1 from '../../assets/customer/team-1.png'
import team2 from '../../assets/customer/team-2.png'
import team3 from '../../assets/customer/Team-3.png'


const Customers = () => {
  return (
    <div>
      <div className="pt-6 pb-6 bg-[#ecf4fb]">
        <h2
          className="text-center text-4xl font-extrabold pb-16 text-[#dc2626]"
          style={{ textShadow: "2px 2px 4px #000000" }}
        >What Our <span className="text-[#fcd34d]">Customers Say</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <div className="space-y-4 text-center">
                <img src={team1} alt="" style={{width: "100px", height:'100px', borderRadius:'50%', margin:'auto'}} />
                <p className="text-md pl-2" style={{textShadow: '1px 1px 15px #000000'}}>I recently purchased the math toy set for my 10-year-old daughter, and I cannot express how impressed I am with its quality and educational value. This toy has turned math into an exciting adventure for her!</p>
                <h4 className="font-extrabold">Marlin Doli</h4>
            </div>
            <div className="space-y-4 text-center">
                <img src={team2} alt="" style={{width: "100px", height:'100px', borderRadius:'50%', margin:'auto'}} />
                <p className="text-md pl-2" style={{textShadow: '1px 1px 15px #000000'}}>First and foremost, educational toys are designed to be both fun and educational. They seamlessly integrate play and learning, incorporate interactive features,capturing childrens attention and fostering a love for learning</p>
                <h4 className="font-extrabold">Jacksion</h4>
            </div>

            <div className="space-y-4 text-center">
                <img src={team3} alt="" style={{width: "100px", height:'100px', borderRadius:'50%', margin:'auto'}} />
                <p className="text-md pl-2" style={{textShadow: '1px 1px 15px #000000'}}>The quality of the toy set is exceptional. The components are durable and well-made, ensuring that they  play and experimentation. I appreciate the attention to detail in the design, as each piece fits together </p>
                <h4 className="font-extrabold">Disosa</h4>
            </div>
        </div>
      
      </div>
    </div>
  );
};

export default Customers;
