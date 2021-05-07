import { FC } from 'react';

import styles from './table.module.css';

type ColumnType = {
  title: string;
  accesor?: string;
  id?: string;
  children?: (value: any, index: number) => void;
};

type TablePropsType = {
  columns: ColumnType[];
  data: any[];
  emptyMessage?: string;
};

const TableComponent: FC<TablePropsType> = ({
  columns,
  data = [],
  emptyMessage = 'No hay datos para mostrar',
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={column?.id || index}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!data.length ? (
          <tr>
            <td colSpan={columns.length}>{emptyMessage}</td>
          </tr>
        ) : (
          data.map((obj, index) => (
            <tr key={index}>
              {columns.map(({ accesor, children: child, id }, colIndex) => (
                <td key={`${index}-${id || colIndex}`}>
                  {child ? child(obj, index) : obj[accesor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
