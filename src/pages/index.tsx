import { Heading, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Wallets = dynamic(() => import("../components/Wallets"), { ssr: false });

export default function IndexPage() {
  return (
    <VStack gap={8} mt={16}>
      <Heading>Solana Custom Wallet UI example (Chakra UI)</Heading>

      <Wallets />
    </VStack>
  );
}
