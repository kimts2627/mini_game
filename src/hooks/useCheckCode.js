

const useCheckCode = (code) => {
  if(code.includes('script')) {
    alert("script 단어 금지");
  }
  if(code) {
    return true;
  }
}

export default useCheckCode;
