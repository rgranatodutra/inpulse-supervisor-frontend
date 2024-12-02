import { toast } from "react-toastify";
import * as XLSX from "xlsx";
import { useCustomRequest } from "../../../../../api";
import FormTemplate from "../../../../../components/FormTemplate/FormTemplate";
import { ButtonType2 } from "../../../../../styles/buttons.style";
import useCustomState from "../../../../../utils/customState.hook";
import StyledParamsForm from "./configsStyle";
import StyledExceptionsPage from "./style";

const ImportMailListPage = () => {
	const sheetDataToDisplay = useCustomState<unknown[] | null>(null);
	const fileToUpload = useCustomState<File | null>(null);

	const handleFileUpload = (e) => {
		fileToUpload.set(e.target.files[0]);
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			if (event.target) {
				const workbook = XLSX.read(event.target.result, { type: "binary" });
				const sheetName = workbook.SheetNames[0];
				const sheet = workbook.Sheets[sheetName];
				const sheetData = XLSX.utils.sheet_to_json(sheet);
				sheetDataToDisplay.set(sheetData);
			}
		};

		reader.readAsBinaryString(file);
	};

	function sendFile() {
		if (fileToUpload.value) {
			const formData = new FormData();
			formData.append("file", fileToUpload.value);

			useCustomRequest({
				endpoint: "/mail-list",
				requestData: formData,
				method: "post",
				requestHeaders: { "Content-Type": "multipart/form-data" },
				service: "tools",
				onSuccess: (res) => {
					console.log(res);
					toast.success("Mail list adicionado com sucesso");
				},
			});
		} else {
		}
	}

	console.log(sheetDataToDisplay.value);

	return (
		<StyledExceptionsPage>
			<StyledParamsForm>
				<div className="save-button">
					<ButtonType2 onClick={sendFile}> Enviar </ButtonType2>
				</div>
				<FormTemplate
					buttonText="Salvar"
					disabled={true}
					submitForm={() => {}}
					noButton
					title="Importar lista de mails"
				>
					<input type="file" onChange={handleFileUpload} accept=".xls" />
					{sheetDataToDisplay.value && (
						<div>
							<h2>Imported Data:</h2>
							<pre>{JSON.stringify(sheetDataToDisplay.value, null, 2)}</pre>
						</div>
					)}
				</FormTemplate>
			</StyledParamsForm>
		</StyledExceptionsPage>
	);
};

export default ImportMailListPage;
