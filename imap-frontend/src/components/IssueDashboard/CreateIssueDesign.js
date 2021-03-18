import styled from 'styled-components';

export const CreateButton = styled.button`
  bottom:40px;
  right:40px;
  height: 70px;
  width: 70px;
  background: #42A5F5;
  border-radius: 50%;
  position: absolute;
  color: #fff;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 24px;
  font-size: 2rem;
  font-weight: 500;
  z-index: 5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all .2s ease-out;
  transition: all .2s ease-out;
  cursor: pointer;

  &:hover {
    background: #64B5F6;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
  }
`;

export const H1 = styled.h1`
  margin: 10px 0 30px 0;
  text-align: center;
`
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  .light {
    font-weight: 300;
    display: inline;
  }
`

export const Input = styled.input`
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 18px;
  height: auto;
  padding: 15px;
  width: 98%;
  background-color: #e8eeef;
  color: #8a97a0;
  margin-bottom: 30px;
`

export const SubmitButton = styled.button`
  padding: 15px 15px 15px 15px;
  color: #FFF;
  background-color:  #42A5F5;
  font-size: 18px;
  margin-top:10px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border:none;
`

export const TextArea = styled.textarea`
    background: rgba(255,255,255,0.1);
    border: none;
    font-size: 18px;
    height: auto;
    padding: 15px;
    width: 98%;
    background-color: #e8eeef;
    color: #8a97a0;
    margin-bottom: 30px;
`
