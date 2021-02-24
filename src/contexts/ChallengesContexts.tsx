import { createContext, ReactNode, useContext, useState } from 'react';
import challenges from '../../challenges.json';

interface challenge{
    type: 'body' | 'eye';
    description: string; 
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    levelUp: () => void;
    startNewChallenge:() => void;
    resetChallenge: () => void;

}

interface ChallengesProviderFrops{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderFrops){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [ activeChallenge,setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level+1) * 4, 2)

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }
    
    return(
        <ChallengesContext.Provider 
        value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            resetChallenge,
            activeChallenge,
            experienceToNextLevel,
            
            }}>
            {children}
        </ChallengesContext.Provider>
    )
}