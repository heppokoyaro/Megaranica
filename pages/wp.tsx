import React from 'react';
import  styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';

const WP = () => {
  return (
    <div>
    <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <img
          src="/wp/wp_top.jpg"
          alt="Background"
          className="w-full object-cover h-40 md:h-80"
        />
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-sansita">
          White Paper
        </h1>
        <p className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            It is said that there are countless "other worlds" within our world, and one of them is called "Megaranica." It is a mysterious world that is both cute and somewhat poisonous.As a means to boost the population of Megaranica, we are currently seeking immigrants from various parts of the world.Would you like to immigrate to Megaranica?</p>
    </div>

        {
            <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-8 md:px-16">
              
              <div className="mb-10 md:mb-16 pt-10">
              <p className="mx-auto max-w-screen-md text-center md:text-lg">Megaranica is a world of unique characters inhabited by Gesyutaruto.Get Generative NFT and become a resident of Megaranica!</p>
              </div>
              
          
              <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16 pt-10 pb-20">
                
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg md:h-14 md:w-14 md:rounded-full">
                        <FontAwesomeIcon icon={fa1} className="h-6 w-6" />
                    </div>
          
                  <h3 className="mb-2 text-center text-lg font-semibold md:text-xl font-sansita">Resident card NFT</h3>
                  <p className="mb-2 text-center">You can create a resident card NFT that can be exchanged with other residents. By using this NFT, you can communicate with various friends.</p>
                  <a href="#" className="font-bold text-pink-500 transition duration-100 hover:text-pink-600 active:text-pink-700 pt-4">More</a>
                </div>
                
          
                
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg md:h-14 md:w-14 md:rounded-full">
                        <FontAwesomeIcon icon={fa2} className="h-6 w-6" />
                    </div>
          
                  <h3 className="mb-2 text-center text-lg font-semibold md:text-xl font-sansita">Megaranica TRPG</h3>
                  <p className="mb-2 text-center">The TRPG rulebook is available exclusively to holders of the Generative NFT. Let's have a TRPG session together!</p>
                  <a href="#" className="font-bold text-pink-500 transition duration-100 hover:text-pink-600 active:text-pink-700 pt-4">More</a>
                </div>
                
          
                
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg md:h-14 md:w-14 md:rounded-full">
                        <FontAwesomeIcon icon={fa3} className="h-6 w-6" />
                    </div>
          
                  <h3 className="mb-2 text-center text-lg font-semibold md:text-xl font-sansita">Commission</h3>
                  <p className="mb-2 text-center">You can request and receive commissions for your NFT illustrations.Illustrations created by Commission will be delivered to you as NFT.</p>
                  <a href="#" className="font-bold text-pink-500 transition duration-100 hover:text-pink-600 active:text-pink-700 pt-4">More</a>
                </div>              
            
              </div>

              <hr className="my-4 border-gray-800" />



              <div className="mb-10 md:mb-16 pt-20">
                <h2 className="mb-4 text-center text-2xl font-bold font-sansita md:mb-6 lg:text-3xl">Resident card NFT</h2>
                <ul className={`mx-auto max-w-screen-md md:text-lg ${styles.bulletList}`}>
                    <li>You can create your own resident Resident card by selecting the generative NFT you possess</li>
                    <li>You can make your resident card into NFT</li>
                    <li>Exchange your NFT resident card with other residents! </li>
                </ul>
                <div className="flex justify-center pt-8">
                <img src="/wp/jene-jumin_edited.webp" alt="Image" className= 'mx-auto w-1/3' />
                </div>
              </div>

              <div className="mb-10 md:mb-16 pt-4">
                <h2 className="mb-4 text-center text-2xl font-bold font-sansita md:mb-6 lg:text-3xl">Megaranica TRPG</h2>
                <ul className={`mx-auto max-w-screen-md md:text-lg ${styles.bulletList}`}>
                    <li>If you own a Generative NFT, you can view the original Megaranica TRPG rulebook by connecting your Wallet to the Megaranica Web site!</li>
                    <li>Let's do TRPG together with the residents!</li>
                    <li>Let's exchange your Resident Card NFT with members who have done TRPG together!</li>
                    <li>We would also like to add mini-games and training elements outside of TRPG sessions.</li>
                </ul>
                <div className="flex justify-center pt-8">
                <img src="/wp/TRPG.webp" alt="Image" className= 'mx-auto w-1/3' />
                </div>
              </div>

              <div className="mb-10 md:mb-16 pt-4">
                <h2 className="mb-4 text-center text-2xl font-bold font-sansita md:mb-6 lg:text-3xl">Megaranica Commission</h2>
                <ul className={`mx-auto max-w-screen-md md:text-lg ${styles.bulletList}`}>
                    <li>Megaranica characters may be used for derivative works only if the author, the NFT owner, gives permission (although the author, Gestalt Disintegration Flag, is free to create illustrations).</li>
                    <li>You can request and receive fan art, TRPG scenarios, and other derivative works on the Megaranica Commission page.</li>
                    <li>The works will be delivered as NFT.</li>
                </ul>
                <div className="flex justify-center pt-8">
                <img src="/wp/Commission.webp" alt="Image" className= 'mx-auto w-1/3' />
                </div>
              </div>


            </div>
          </div>
        
        
        }
    </div>
  );
};

export default WP;