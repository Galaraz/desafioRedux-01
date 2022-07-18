const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';
const MODIFICAR_NOME = 'aluno/MODIFICAR_NOME';

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});

export const modificarNome = (nome) => ({
  type: MODIFICAR_NOME,
  payload: nome,
});

const initialState = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
    case MODIFICAR_NOME:
      state.nome = action.payload;
      break;  
  }
}, initialState);

export default reducer;
