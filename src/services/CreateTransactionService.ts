import { getCustomRepository, Repository } from 'typeorm';

// import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: RequestDTO): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const repository = transactionRepository.create({
      title,
      value,
      type,
    });

    await transactionRepository.save(repository);

    return repository;
  }
}

export default CreateTransactionService;
