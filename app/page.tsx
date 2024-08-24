import Appbar from "@/components/Appbar";
import WalletInput from "@/components/WalletInput";

export default function Home() {
  return (
    <main>
      <Appbar />
      <div className="px-20 py-10">
        <WalletInput />
      </div>
    </main>
  );
}
