import { z } from "zod";
import { useRendering } from "../../helpers/use-rendering";
import { CompositionProps, COMP_NAME } from "../../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button/Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { Input } from "./Input";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";

export const RenderControls: React.FC<{
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  // inputProps: z.infer<typeof CompositionProps>;
  inputProps: [object];
}> = ({ text, setText, inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  return (
    <InputContainer>
      {state.status === "init" ||
      state.status === "invoking" ||
      state.status === "error" ? (
        <>
          <div className="overflow-y-scroll snap-y max-h-96">
          {
          inputProps ?
          inputProps.map((c: any, k: number) => {
            return (
              c.words.map((w: any, k: number) => {
                return (
                  <div className="bg-gray-900 p-5 m-5 snap-start" key={k}>
                    <p className="text-gray-500">{(w.start).toString().replace(".", ":")} - {(w.end).toString().replace(".", ":")}</p>
                    <Input
                      disabled={state.status === "invoking"}
                      setText={setText}
                      text={w.word}
                      ></Input>
                    {/* <Sequence from={w.start*60} durationInFrames={(w.end*60) - (w.start*60)} key={k}>
                      <Title titleText={w.word} titleColor="white" />
                    </Sequence> */}
                    </div>
                )
              })
            )
          })
          :
          "Loading Captions"
        }
            <Input
              disabled={state.status === "invoking"}
              setText={setText}
              text={text}
            ></Input>
          </div>
          <Spacing></Spacing>
          <div className="flex items-center">
            <Button
              disabled={state.status === "invoking"}
              loading={state.status === "invoking"}
              onClick={renderMedia}
            >
              Render video
            </Button>
          </div>
          {state.status === "error" ? (
            <ErrorComp message={state.error.message}></ErrorComp>
          ) : null}
        </>
      ) : null}
      {state.status === "rendering" || state.status === "done" ? (
        <>
          <ProgressBar
            progress={state.status === "rendering" ? state.progress : 1}
          />
          <Spacing></Spacing>
          <AlignEnd>
            <DownloadButton undo={undo} state={state}></DownloadButton>
          </AlignEnd>
        </>
      ) : null}
    </InputContainer>
  );
};
