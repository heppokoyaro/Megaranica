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
import { Dialog } from "@headlessui/react";

interface EmbedCodeProps {
  src: string; // NFT contract address
}

const EmbedCode: React.FC<EmbedCodeProps> = ({ src }) => {
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
  const isButtonDisabled = !(!loadingEligibility && eligibility?.length === 0);
  const handleValueChange = (value: number) => {setCounterValue(value);};
  const handleError = (errorMessage: string) => {setError(errorMessage);};

  if (!address) return <div>No wallet connected</div>;
  return (
    <div>
      <h1>Claim Phases</h1>
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
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Counter:</h1>
        <Counter min={0} max={3} onValueChange={handleValueChange} />
      </div>

      <div>
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
              <p>Eligible to claim.</p>
            ) : (
              eligibility?.map((reason) => {
                return <p key={reason}>{reason}</p>;
              })
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* {error && (
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          open={!!error}
          onClose={() => setError(null)}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="w-full max-w-md p-6 my-8 mx-auto bg-white rounded-xl shadow-md">
                <Dialog.Title className="text-xl font-bold">Error</Dialog.Title>
                <div className="mt-4">
                  <p>{error}</p>
                </div>
                <div className="mt-6">
                  <button
                    className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                    onClick={() => setError(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
        </Dialog>
      )} */}
    </div>
  );
};

export default EmbedCode;