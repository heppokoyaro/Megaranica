// components/EmbedCode.tsx
import React, { useState } from "react";
import {
  useAddress,
  useContract,
  useActiveClaimCondition,
  useClaimIneligibilityReasons,
  Web3Button,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Counter from "../components/counter";

const EmbedCode: React.FC = () => {
  const contractAddress = "0xFa4d9De5f022F8db8f895B1b12f9Ddb48d28Cb46";
  const [counterValue, setCounterValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data: claimPhase, isLoading: loadingClaimPhase } = useActiveClaimCondition(contract);
  const { data: eligibility, isLoading: loadingEligibility } = useClaimIneligibilityReasons(
    contract,
    {
      walletAddress: address || "",
      quantity: counterValue,
    }
  );
  const isButtonDisabled = loadingEligibility || eligibility?.length !== 0;
  const handleValueChange = (value: number) => {setCounterValue(value);};
  const handleError = (errorMessage: string) => {setError(errorMessage);};
  const imageSrc = "/mint/icon.png"; // Replace with your desired image URL

  if (!address) return <div className="text-black">No wallet connected</div>;
  return (
    <div className="max-w-md mx-auto bg-mintcard rounded-xl shadow-2xl overflow-hidden md:max-w-2xl text-black">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={imageSrc}
            alt="NFT Image"
          />
        </div>
        <div className="p-8">
          {!loadingClaimPhase ? (
            claimPhase && (
              <div>
                <p>Phase name: {claimPhase.metadata?.name}</p>
                <p>Supply: {claimPhase.availableSupply}</p>
                <p>
                  Price: {ethers.utils.formatUnits(claimPhase.price)}{" "}
                  {claimPhase.currencyMetadata.symbol}
                </p>
              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
          <div className="container mx-auto">
            <h1 className="mb-2">Quantity:</h1>
            <div className="flex items-center justify-center">
              <Counter min={0} max={3} onValueChange={handleValueChange} />
            </div>          
          </div>

          <div className="text-center p-4">
            <Web3Button
              contractAddress={contractAddress}
              action={async (contract) => {
                try {
                  await contract.erc721.claim(counterValue);
                } catch (error: unknown) {
                  if (error instanceof Error) {
                    handleError(error.message);
                  } else {
                    handleError('An unknown error occurred.');
                  }
                }
              }}
              isDisabled={isButtonDisabled}
              theme="light"
            >
              Claim
            </Web3Button>
          </div>

          <div>
            {!loadingEligibility ? (
              <>
                {eligibility?.length === 0 ? (
                  <p className="text-green-600">Eligible to claim.</p>
                ) : (
                  eligibility?.map((reason) => {
                    return <p key={reason} className="text-red-600">{reason}</p>;
                  })
                )}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbedCode;