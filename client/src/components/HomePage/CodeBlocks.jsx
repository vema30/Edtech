import React from 'react';
import { TypeAnimation } from 'react-type-animation'; // Corrected import statement
import CTAbuttom from '../Button';

const CodeBlocks = ({ position, heading, subheading, ctabutton1, ctabutton2, bgGradient, codeColor, codeblock }) => {
  // Split the code block by new lines to create an array of code lines
  const codeLines = codeblock.split('\n');

  return (
    <div className={`flex ${position}  p-10`}>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <div className="text-lg mb-4">{subheading}</div>
        <div className="flex gap-2">
          <CTAbuttom linkto={ctabutton1.linkto} active={ctabutton1.active}>
            <div>{ctabutton1.btnText}</div>
          </CTAbuttom>
          <CTAbuttom linkto={ctabutton2.linkto} active={ctabutton2.active}>
            <div>{ctabutton2.btnText}</div>
          </CTAbuttom>
        </div>
      </div>

      <div className={`w-full md:w-1/2 border-2 border-brown-300 p-4 rounded-lg ${bgGradient} h-[300px] overflow-auto flex flex-row`}>
        <div className="flex flex-col w-[10%] text-gray-400">
          {codeLines.map((_, index) => (
            <p key={index} className="text-sm text-white">{index + 1}</p> // Display line numbers
          ))}
        </div>
        <div className="w-[90%]">
          <pre className={`text-white font-mono ${codeColor}`}>
            {codeLines.map((line, index) => (
              <TypeAnimation
                key={index}
                sequence={[line, 500]} // Adjust sequence if needed
                speed={50} // Typing speed
                
                className="block"
                // Space between lines
              />
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
