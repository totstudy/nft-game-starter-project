const CONTRACT_ADDRESS = "0x58C2b1790009Db8B858b06d3663cb052e6081f19";

// NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
// 変数を constants.js 以外の場所でも使えるようにします。
export { CONTRACT_ADDRESS, transformCharacterData };



