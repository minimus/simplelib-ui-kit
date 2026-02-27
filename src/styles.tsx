import styled from 'styled-components';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const getSize = (val: string | undefined): string => {
  switch (val) {
    case 'xSmall':
      return '150px';
    case 'small':
      return '300px';
    case 'half':
      return '50%';
    case 'big':
      return '75%';
    case 'fill':
      return '100%';
    default:
      return '150px';
  }
};

interface IRootProps {
  relative?: boolean;
  button?: boolean;
  inside?: boolean;
  size?: string;
}

export const Root = styled.div<IRootProps>`
  position: ${(props: IRootProps) => (props?.relative ? 'relative' : 'inherit')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${(props: IRootProps) => (props.inside ? 'inherit' : '100%')};
  margin: 5px 0 10px;

  & .MuiTextField-root {
    width: calc(${(props: IRootProps) => getSize(props?.size)} - 10px);
    margin: 5px;
  }

  & .MuiOutlinedInput-adornedEnd {
    padding-right: ${(props: IRootProps) => (props.button ? '0' : '14px')};
  }
`;

export const FieldCaption = styled.div`
  font-weight: 700;
  color: rgb(0 0 0 / 54%);
`;
export const FieldTooltip = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(0 0 0 / 54%);
`;

interface TRadioGroupRootProps {
  column: boolean;
}

export const RadioGroupRoot = styled.div<TRadioGroupRootProps>`
  display: flex;
  flex-direction: ${(props: TRadioGroupRootProps) => (props?.column ? 'column' : 'row')};
`;

export const CrossFieldContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 380px;
  max-width: 450px;
  margin-top: 10px;
`;

export const CrossFieldSingleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CrossFieldDoubleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BorderSettingsRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const BorderSettingsContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ShadowSettingsRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  gap: 20px;
  width: 100%;
  padding: 5px;
`;

export const ShadowSettingsContentRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShadowSettingsContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ShadowSettingsPreviewRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border: 25px solid #dcdada;
`;

export const ShadowSettingsPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid #dcdada;

  & span:first-child {
    font-size: 25px;
    font-weight: 700;
  }
`;

export const ColorPopover = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  z-index: 2;

  & .flexbox-fix input {
    padding: initial;
  }
`;

export const ColorCover = styled.div`
  position: fixed;
  inset: 0;
`;

interface IColorSelectIconProps {
  value: string;
}

export const ColorSelectIcon = styled(Brightness1Icon)<IColorSelectIconProps>`
  &.MuiSvgIcon-root {
    fill: ${(props: IColorSelectIconProps) => props.value};
  }
`;

interface IImagePreview {
  preview: number | boolean;
}

export const ImageComponentsContainer = styled.div<IImagePreview>`
  display: ${(props: IImagePreview) => (props.preview ? 'grid' : 'inherit')};
  ${(props: IImagePreview) => props.preview && `grid-template-columns: ${props.preview}px 1fr;`}
  gap: 5px;
  width: 100%;
`;

export const ImageInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface IImagePreviewContainer {
  image: string;
  $size: number | boolean;
}

export const ImagePreview = styled.div<IImagePreviewContainer>`
  display: ${(props: IImagePreviewContainer) => (props.$size ? 'inherit' : 'none')};
  max-width: ${(props: IImagePreviewContainer) => (props.$size ? `${props.$size}px` : 0)};
  max-height: ${(props: IImagePreviewContainer) => (props.$size ? `${props.$size}px` : 0)};
  margin: 10px 0 0;
  background-image: url('${(props: IImagePreviewContainer) => props.image}');
  background-repeat: no-repeat;
  background-position: center;

  /* background-size: contain;
	border: 1px solid #dcdada; */
  border-radius: 5px;
`;
