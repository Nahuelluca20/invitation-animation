import {Input, FormLabel, Stack} from "@chakra-ui/react";

function InputText({label, placeholder, functionChange}) {
  return (
    <Stack>
      <FormLabel color="#C9AA79" fontSize="15px" fontWeight="600" mb={0} ml={2}>
        {label}
      </FormLabel>
      <Input
        backgroundColor="white"
        borderRadius={0}
        placeholder={placeholder}
        px={5}
        py={1}
        variant="unstyled"
        onChange={functionChange}
      />
    </Stack>
  );
}

export default InputText;
