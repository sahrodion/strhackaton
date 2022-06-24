import React from 'react'
import ContentContainer from './ContentContainer'
import SelectCrypto from './SelectCrypto';

export default function HomePage() {
  return (
    <div>
      <section className={`w-screen flex justify-center items-center`}>
        <ContentContainer>
          <div className={`w-full flex justify-between items-center`}>
            <SelectCrypto
            btc
              style={{
                background: "rgba(247, 147, 26, 0.16)",
              }}
              style2={{
                background: "rgba(247, 147, 26, 0.24)",
              }}
              src={`/assets/bitcoin.svg`}
              token={"BTC"}
              tokenName={"Bitcoin"}
            />
            <SelectCrypto
            stx
              style={{
                background: "rgba(85, 70, 255, 0.16)",
              }}
              style2={{
                background: "rgba(85, 70, 255, 0.24)",
              }}
              src={`/assets/stacks.svg`}
              token={"STX"}
              tokenName={"Stacks"}
            />
            <SelectCrypto
            link
              style={{
                background: "rgba(51, 93, 210, 0.16)",
              }}
              style2={{
                background: "rgba(85, 70, 255, 0.24)",
              }}
              src={`/assets/chainlink.svg`}
              token={"LINK"}
              tokenName={"Chainlink"}
            />
          </div>
        </ContentContainer>
      </section>
      <section></section>
    </div>
  );
}
