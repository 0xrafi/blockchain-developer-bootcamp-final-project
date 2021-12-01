import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  getCurrentSupply,
  mintNFT,
} from "./util/interact.js";

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    const currSupply = await getCurrentSupply();
    setWallet(address);
    setStatus(status);
    setTotalSupply(currSupply);
    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
      setTotalSupply(parseInt(totalSupply)+1);
    }
  };

  return (
    <div className="Minter">
      <div>Total minted: {totalSupply}</div>

      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title"> ✍️ Ape Pen NFT Minter v0.0 🖋</h1>
      <p>
        Manually add your pen's name, description, and IPFS link then press Mint.
      </p>
      <form>
        <h2>Name: </h2>
        <input
          type="text"
          placeholder="e.g. Pen of Gaia"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>Description: </h2>
        <input
          type="text"
          placeholder="e.g. A legendary pen built to ink the stories of legends."
          onChange={(event) => setDescription(event.target.value)}
        />
        <h2>IPFS link: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash> (you must manually pin it)"
          onChange={(event) => setURL(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT (0.1 ETH price)
      </button>
      <p id="status" style={{ color: "red" }}>
        {status}
      </p>
    </div>
  );
};

export default Minter;
