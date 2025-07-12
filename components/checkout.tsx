"use client";

import { CrossmintProvider, CrossmintEmbeddedCheckout } from "@crossmint/client-sdk-react-ui";

interface CheckoutWithCrossmintProps {
    tokenId: number;
    nftPriceEth: string;
}

export default function CheckoutWithCrossmint({ tokenId, nftPriceEth }: CheckoutWithCrossmintProps) {
    const clientApiKey = process.env.NEXT_PUBLIC_CROSSMINT_STAGING_CLIENT_API_KEY as string;
    const collectionId = process.env.NEXT_PUBLIC_STAGING_COLLECTION_ID as string;

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6 bg-white">
            <CrossmintProvider apiKey={clientApiKey}>
                <div className="max-w-[450px] w-full">
                    <CrossmintEmbeddedCheckout
                        lineItems={{
                            // <chain>:<your NFT contract>:<tokenId>
                            tokenLocator: `base-sepolia:${process.env.NEXT_PUBLIC_SEPOLIA_CONTRACT_ADDRESS}:${tokenId}`,
                            callData: {
                              totalPrice: nftPriceEth.toString(),
                              quantity: 1,
                            },
                          }}
                          payment={{
                            crypto: { enabled: true },
                            fiat:   { enabled: true },
                          }}
                    />
                </div>
            </CrossmintProvider>
        </div>
    );
}