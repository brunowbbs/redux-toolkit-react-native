import { WritableDraft } from "immer/dist/internal";

export function setIsPending(state: WritableDraft<StateProps>) {
  state.loading = true;
  state.error = false;
}

export function setIsReject(state: WritableDraft<StateProps>) {
  alert("Erro ao buscar dados");
  state.loading = false;
  state.error = true;
}

export function setIsFulfilled(state: WritableDraft<StateProps>) {
  state.loading = false;
}
