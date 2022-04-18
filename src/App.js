import {
  createRef,
  useRef,
} from 'react';
import axios from 'axios';

import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MyDataGrid from './components/MyDataGrid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  const inputNameRef = createRef();
  const alunoMyDataGridRef = createRef();

  const selectedRowId = useRef(null);

  const getInputNameRef = () => {
      return inputNameRef.current;
  };

  const getAlunoMyDataGridRef = () => {
      return alunoMyDataGridRef.current;
  };

  const setSelectedRowId = rowId => {
      selectedRowId.current = rowId;
  };

  const getSelectedRowId = () => {
      return selectedRowId.current;
  };

  const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
      setSelectedRowId(rowId);

      getInputNameRef().setValue(rowData.nome);
  };

  const handleOnButtonSaveClick = async () => {
      let rowId = getSelectedRowId();

      if (rowId) {
          await axios.put(`/api/TbAluno/${rowId}`, {
              id: rowId,
              nome: getInputNameRef().getValue(),
          });

          setSelectedRowId(null);
      } else {
          await axios.post('/api/TbAluno', {
              nome: getInputNameRef().getValue(),
          });
      }

      getAlunoMyDataGridRef().getData();
      getInputNameRef().setValue('');
  };

  return (
      <div
          style={{
              margin: '5% 15%',
          }}
      >
          {/* <MyTitle
              ref={myTitleRef}
              defaultTitle='Minha aplicação'
          />
          <br />
          <MyButton
              text='Botão 1'
              increment={1}
              setTitle={setTitle}
          />
          <br />
          <MyButton
              text='Botão 2'
              increment={2}
              setTitle={setTitle}
          />
          <br />
          <MyButton
              text='Botão 3'
              increment={3}
              setTitle={setTitle}
          />
          <br />
          <MyButton
              text='Botão 4'
              increment={4}
              setTitle={setTitle}
          />
          <br />
          {[1, 2, 3, 4, 5, 6, 7].map((value, index) =>
              <MyButton
                  key={index}
                  text={`Botão ${value}`}
                  increment={value}
                  setTitle={setTitle}
              />
          )}
          <br />
          <br /> */}
          <MyDataGrid
              ref={alunoMyDataGridRef}
              baseURL='api/TbAluno'
              idColumnName='id'
              updateRow={handleOnMyDataGridUpdateRow}
              columns={[
                  {
                      field: 'id',
                      headerName: 'ID',
                      width: 90,
                  },
                  {
                      field: 'nome',
                      headerName: 'Nome',
                      flex: 1,
                  },
              ]}
          />
          <MyInput
              ref={inputNameRef}
              label='Nome: '
          />
          <br />
          <MyButton
              text='Salvar'
              onClick={handleOnButtonSaveClick}
          />
      </div>
  );
}

export default App;