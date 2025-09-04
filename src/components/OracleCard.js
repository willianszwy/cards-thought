import React, { useState, useCallback } from 'react';
import { oracleMessages } from '../data/messages';
import './OracleCard.css';

const OracleCard = () => {
  const [currentMessage, setCurrentMessage] = useState(null);
  const [isConsultDone, setIsConsultDone] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const getRandomMessage = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * oracleMessages.length);
    return oracleMessages[randomIndex];
  }, []);

  const animateCardFlip = useCallback(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
    }, 400);
  }, []);

  const showMessage = useCallback(() => {
    const randomMessage = getRandomMessage();
    setCurrentMessage(randomMessage);
    animateCardFlip();
    
    setTimeout(() => {
      setIsConsultDone(true);
      setIsMessageVisible(true);
    }, 400);
  }, [getRandomMessage, animateCardFlip]);

  const shuffleMessage = useCallback(() => {
    setIsMessageVisible(false);
    animateCardFlip();
    
    setTimeout(() => {
      const randomMessage = getRandomMessage();
      setCurrentMessage(randomMessage);
      setIsMessageVisible(true);
    }, 200);
  }, [getRandomMessage, animateCardFlip]);

  const handleCardHover = () => {
    if (!isConsultDone) {
      // Card hover effect handled by CSS
    }
  };

  return (
    <div className="card-container">
      <div 
        className={`oracle-card ${isFlipping ? 'flip-active' : ''}`}
        onMouseEnter={handleCardHover}
      >
        <div className="card-inner">
          <div className="card-front">
            <div className="card-decorations">
              <span className="corner-decoration top-left">❋</span>
              <span className="corner-decoration top-right">❋</span>
              <span className="corner-decoration bottom-left">❋</span>
              <span className="corner-decoration bottom-right">❋</span>
            </div>
            
            <div className="card-content">
              {!isConsultDone ? (
                <button className="consult-btn" onClick={showMessage}>
                  Consulte sua mensagem
                </button>
              ) : (
                <div className={`message-content ${isMessageVisible ? 'visible' : 'hidden'}`}>
                  <p className="oracle-message">
                    "{currentMessage?.quote}"
                  </p>
                  <p className="oracle-author">
                    {currentMessage?.author}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {isConsultDone && (
        <button className="shuffle-btn" onClick={shuffleMessage}>
          Sortear Novamente
        </button>
      )}
    </div>
  );
};

export default OracleCard;