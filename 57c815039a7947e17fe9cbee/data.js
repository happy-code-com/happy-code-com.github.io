/**
 * Created by happycode on 24/08/16.
 */
var cards_info = {

    'debit': {

        '1': {
            'id': 1,
            'name': 'Тинькофф Банк',
            'logo_file': 'tinkoff_bank_logo.png',
            'card_category': 'Visa Platinum',
            'card_type': 'Дебетовая',
            'program_name': 'Tinkoff Black',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '2', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '2', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '2', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 1188, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 30000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': true, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '2': {
            'id': 2,
            'name': 'ВТБ24',
            'logo_file': 'vtb24_logo.png',
            'card_category': 'Visa Classic',
            'card_type': 'Дебетовая',
            'program_name': 'Cash back',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '5000', // руб
            'cash_back_pay_limit_year': '60000', // руб
            'cost_of_services': 900, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 20000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 200000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 90, // Стоимость выпуска карты
        },

        '3': {
            'id': 3,
            'name': 'ВТБ24',
            'logo_file': 'vtb24_logo.png',
            'card_category': 'Visa Gold',
            'card_type': 'Дебетовая',
            'program_name': 'Автокарта',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '15000', // руб
            'cash_back_pay_limit_year': '180000', // руб
            'cost_of_services': 4200, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 35000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 300, // Стоимость выпуска карты
        },

        '4': {
            'id': 4,
            'name': 'ВТБ24',
            'logo_file': 'vtb24_logo.png',
            'card_category': 'Visa Gold',
            'card_type': 'Дебетовая',
            'program_name': 'Карта впечатлений',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '3', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '15000', // руб
            'cash_back_pay_limit_year': '180000', // руб
            'cost_of_services': 4200, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 35000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 300, // Стоимость выпуска карты
        },

        '5': {
            'id': 5,
            'name': 'Русский Стандарт',
            'logo_file': 'rsb_bank.svg',
            'card_category': 'Банк в кармане Gold',
            'card_type': 'Дебетовая',
            'program_name': 'RS Cashback',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1.67', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '2', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '2.33', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 3000, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 300000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '6': {
            'id': 6,
            'name': 'Альфа Банк',
            'logo_file': 'alfabank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'Cash Back',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '5', // %
            'cash_back_gas_stations': '10', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '2000', // руб
            'cash_back_pay_limit_year': '24000', // руб
            'cost_of_services': 2189, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 20000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 1200, // Стоимость выпуска карты
        },

        '7': {
            'id': 7,
            'name': 'Восточный Экспресс',
            'logo_file': 'vostochniy_express_bank_logo.png',
            'card_category': 'Visa Classic',
            'card_type': 'Дебетовая',
            'program_name': 'Карта N°1',
            'cash_back_other_categories': 1, // %
            'cash_back_restaurant': 1, // %
            'cash_back_gas_stations': 1, // %
            'cash_back_travel': 1, // %
            'cash_back_clothes': 1, // %
            'cash_back_superstore': 1.5, // %
            'cash_back_pay_limit_month': 2500, // руб
            'cash_back_pay_limit_year': 30000, // руб
            'cost_of_services': 1188, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 30000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны
            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 150, // Стоимость выпуска карты
        },

        '8': {
            'id': 8,
            'name': 'МТС Банк',
            'logo_file': 'mts_bank_logo.png',
            'card_category': 'MasterCard Unembossed / MasterCard Standard',
            'card_type': 'Дебетовая',
            'program_name': 'МТС Деньги/МТС Деньги Вклад',
            'cash_back_other_categories': '3', // %
            'cash_back_restaurant': '3', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '3', // %
            'cash_back_clothes': '3', // %
            'cash_back_superstore': '3', // %
            'cash_back_pay_limit_month': '1500', // руб
            'cash_back_pay_limit_year': '18000', // руб
            'cost_of_services': 2090, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '9': {
            'id': 9,
            'name': 'Кредит Европа Банк',
            'logo_file': 'kredit_europe_bank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'CARD PLUS',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '5', // %
            'cash_back_gas_stations': '5', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '5000', // руб
            'cash_back_pay_limit_year': '60000', // руб
            'cost_of_services': 499, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '10': {
            'id': 10,
            'name': 'Росбанк',
            'logo_file': 'rosbank_logo.png',
            'card_category': 'Visa Platinum',
            'card_type': 'Дебетовая',
            'program_name': 'Автокарта',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '5', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '5000', // руб
            'cash_back_pay_limit_year': '60000', // руб
            'cost_of_services': 6000, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 250000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '11': {
            'id': 11,
            'name': 'Росбанк',
            'logo_file': 'rosbank_logo.png',
            'card_category': 'Visa Platinum',
            'card_type': 'Дебетовая',
            'program_name': 'Сверхкарта+',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '2.5', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '5000', // руб
            'cash_back_pay_limit_year': '60000', // руб
            'cost_of_services': 6000, // руб
            'wellcome_points': 7, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 250000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '12': {
            'id': 12,
            'name': 'Юникредит',
            'logo_file': 'unicreditbank_logo.png',
            'card_category': 'Visa Gold+/MasterCard Gold+',
            'card_type': 'Дебетовая',
            'program_name': 'Пакет услуг "Золотой"',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '0', // руб
            'cash_back_pay_limit_year': '0', // руб
            'cost_of_services': 6000, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '13': {
            'id': 13,
            'name': 'Юникредит',
            'logo_file': 'unicreditbank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'Пакет услуг "Драйв"',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '0', // руб
            'cash_back_pay_limit_year': '0', // руб
            'cost_of_services': 3600, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '14': {
            'id': 14,
            'name': 'Юникредит',
            'logo_file': 'unicreditbank_logo.png',
            'card_category': 'Visa Classic+',
            'card_type': 'Дебетовая',
            'program_name': 'Пакет услуг "Классический"',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '0', // руб
            'cash_back_pay_limit_year': '0', // руб
            'cost_of_services': 1200, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '15': {
            'id': 15,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'Visa Gold',
            'card_type': 'Дебетовая',
            'program_name': 'Карта Развлечений',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '3', // %
            'cash_back_gas_stations': '0', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 3588, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 20000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 100000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': true, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '16': {
            'id': 16,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'Visa Classic',
            'card_type': 'Дебетовая',
            'program_name': 'Карта Развлечений',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '2', // %
            'cash_back_gas_stations': '0', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '2000', // руб
            'cash_back_pay_limit_year': '24000', // руб
            'cost_of_services': 1188, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 10000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 30000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': true, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '17': {
            'id': 17,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'Visa Classic',
            'card_type': 'Дебетовая',
            'program_name': 'Автокарта',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '0', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '2000', // руб
            'cash_back_pay_limit_year': '24000', // руб
            'cost_of_services': 1188, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 10000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 30000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': true, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '18': {
            'id': 18,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'Visa Gold',
            'card_type': 'Дебетовая',
            'program_name': 'Автокарта',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '0', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 3588, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 20000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 100000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': true, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '19': {
            'id': 19,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'Игра престолов, Пакет - Базовый',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '0', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '2000', // руб
            'cash_back_pay_limit_year': '24000', // руб
            'cost_of_services': 1188, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 10000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 30000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': true, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '20': {
            'id': 20,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'Игра престолов, Пакет - Оптимальный',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '0', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 3588, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 20000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 100000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': true, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': true, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '21': {
            'id': 21,
            'name': 'Банк Открытие',
            'logo_file': 'open_bank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'Карта Гладиатора',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '3', // %
            'cash_back_gas_stations': '0', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '3', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 1500, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '22': {
            'id': 22,
            'name': 'Промсвязьбанк',
            'logo_file': 'promsvyazbank_logo.png',
            'card_category': 'Visa Platinum/MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'ALL INCLUSIVE',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '3', // %
            'cash_back_gas_stations': '0', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '3', // %
            'cash_back_pay_limit_month': '1000', // руб
            'cash_back_pay_limit_year': '12000', // руб
            'cost_of_services': 1500, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '23': {
            'id': 23,
            'name': 'Русский Стандарт',
            'logo_file': 'rsb_bank.svg',
            'card_category': 'Банк в кармане Стандарт (Visa, MasterCard)',
            'card_type': 'Дебетовая',
            'program_name': 'RS Cashback',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1.67', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '2', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '2.33', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 900, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 300000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '24': {
            'id': 24,
            'name': 'Альфа Банк',
            'logo_file': 'alfabank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Дебетовая',
            'program_name': 'Комфорт',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '5', // %
            'cash_back_gas_stations': '10', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 5099, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 40000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 1200, // Стоимость выпуска карты
        }
    },

    'credit': {
        '100': {
            'id': 100,
            'name': 'ВТБ24',
            'logo_file': 'vtb24_logo.png',
            'card_category': 'MasterCard Standard',
            'card_type': 'Кредитная',
            'program_name': 'Cash back',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '5000', // руб
            'cash_back_pay_limit_year': '60000', // руб
            'cost_of_services': 900, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 20000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 75, // Стоимость выпуска карты
        },

        '101': {
            'id': 101,
            'name': 'ВТБ24',
            'logo_file': 'vtb24_logo.png',
            'card_category': 'Visa Gold',
            'card_type': 'Кредитная',
            'program_name': 'Карта впечатлений',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '3', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '15000', // руб
            'cash_back_pay_limit_year': '18000', // руб
            'cost_of_services': 4200, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 35000, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 350, // Стоимость выпуска карты
        },

        '102': {
            'id': 102,
            'name': 'ВТБ24',
            'logo_file': 'vtb24_logo.png',
            'card_category': 'MasterCard Gold',
            'card_type': 'Кредитная',
            'program_name': 'Автокарта',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '15000', // руб
            'cash_back_pay_limit_year': '18000', // руб
            'cost_of_services': 4200, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 35000, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 350, // Стоимость выпуска карты
        },

        '103': {
            'id': 103,
            'name': 'Русский Стандарт',
            'logo_file': 'rsb_bank.svg',
            'card_category': 'MasterCard Standard/Visa Classic',
            'card_type': 'Кредитная',
            'program_name': 'Программа RS Cashback',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1.67', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '2', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '2.33', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 900, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '104': {
            'id': 104,
            'name': 'Русский Стандарт',
            'logo_file': 'rsb_bank.svg',
            'card_category': 'MasterCard/Visa Gold',
            'card_type': 'Кредитная',
            'program_name': 'RS Cashback',
            'cash_back_other_categories': 1, // %
            'cash_back_restaurant': 1.67, // %
            'cash_back_gas_stations': 2, // %
            'cash_back_travel': 2, // %
            'cash_back_clothes': 1, // %
            'cash_back_superstore': 2.33, // %
            'cash_back_pay_limit_month': 3000, // руб
            'cash_back_pay_limit_year': 36000, // руб
            'cost_of_services': 3000, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '105': {
            'id': 105,
            'name': 'Альфа Банк',
            'logo_file': 'alfabank_logo.png',
            'card_category': 'MasterCard World',
            'card_type': 'Кредитная',
            'program_name': 'Cash Back',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '5', // %
            'cash_back_gas_stations': '10', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 3990, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '106': {
            'id': 106,
            'name': 'Восточный Экспресс',
            'card_category': 'Visa Instant+Visa Classic',
            'logo_file': 'vostochniy_express_bank_logo.png',
            'card_type': 'Кредитная',
            'program_name': 'Cash Back',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '5', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '5', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '2500', // руб
            'cash_back_pay_limit_year': '30000', // руб
            'cost_of_services': 600, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 1200, // Стоимость выпуска карты
        },

        '107': {
            'id': 107,
            'name': 'Восточный Экспресс',
            'card_category': 'Visa Instant / Visa Classic',
            'logo_file': 'vostochniy_express_bank_logo.png',
            'card_type': 'Кредитная',
            'program_name': 'Автокарта',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '3', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '50000', // руб
            'cash_back_pay_limit_year': '600000', // руб
            'cost_of_services': 600, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 1200, // Стоимость выпуска карты
        },

        '108': {
            'id': 108,
            'name': 'Ситибанк',
            'card_category': 'MasterCard World',
            'logo_file': 'citibank_logo.png',
            'card_type': 'Кредитная',
            'program_name': 'CASH BACK',
            'cash_back_other_categories': '1', // %
            'cash_back_restaurant': '1', // %
            'cash_back_gas_stations': '1', // %
            'cash_back_travel': '1', // %
            'cash_back_clothes': '1', // %
            'cash_back_superstore': '1', // %
            'cash_back_pay_limit_month': '3000', // руб
            'cash_back_pay_limit_year': '36000', // руб
            'cost_of_services': 950, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бесплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '109': {
            'id': 109,
            'name': 'Кредит Европа Банк',
            'logo_file': 'kredit_europe_bank_logo.png',
            'card_category': 'MasterCard Standard',
            'card_type': 'Кредитная',
            'program_name': 'Ferrari',
            'cash_back_other_categories': '0', // %
            'cash_back_restaurant': '0', // %
            'cash_back_gas_stations': '2', // %
            'cash_back_travel': '0', // %
            'cash_back_clothes': '0', // %
            'cash_back_superstore': '0', // %
            'cash_back_pay_limit_month': '1000', // руб
            'cash_back_pay_limit_year': '12000', // руб
            'cost_of_services': 400, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '110': {
            'id': 110,
            'name': 'ВТБ - Банк Москвы',
            'logo_file': 'vtb_moskow_logo.png',
            'card_category': 'Visa Classic / MasterCard Standard',
            'card_type': 'Кредитная',
            'program_name': 'Мой бонус',
            'cash_back_other_categories': 0, // %
            'cash_back_restaurant': 2.25, // %
            'cash_back_gas_stations': 1.75, // %
            'cash_back_travel': 1.25, // %
            'cash_back_clothes': 1.25, // %
            'cash_back_superstore': 0.75, // %
            'cash_back_pay_limit_month': 5000, // руб
            'cash_back_pay_limit_year': 60000, // руб
            'cost_of_services': 900, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 10000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        // Первый год - полцены
        '111': {
            'id': 111,
            'name': 'ВТБ - Банк Москвы',
            'logo_file': 'vtb_moskow_logo.png',
            'card_category': 'Visa Gold / MasterCard Gold',
            'card_type': 'Кредитная',
            'program_name': 'Мой бонус',
            'cash_back_other_categories': 0, // %
            'cash_back_restaurant': 3.75, // %
            'cash_back_gas_stations': 2.75, // %
            'cash_back_travel': 2, // %
            'cash_back_clothes': 2.50, // %
            'cash_back_superstore': 0.75, // %
            'cash_back_pay_limit_month': 5000, // руб
            'cash_back_pay_limit_year': 60000, // руб
            'cost_of_services': 3000, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 25000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '112': {
            'id': 112,
            'name': 'Райффайзен',
            'logo_file': 'raiffeisen_bank_logo.png',
            'card_category': 'MasterCard Gold / MasterCardWorld',
            'card_type': 'Кредитная',
            'program_name': 'MasterCard Gold Package',
            'cash_back_other_categories': 0, // %
            'cash_back_restaurant': 2.50, // %
            'cash_back_gas_stations': 2.50, // %
            'cash_back_travel': 0, // %
            'cash_back_clothes': 0, // %
            'cash_back_superstore': 0, // %
            'cash_back_pay_limit_month': 3000, // руб
            'cash_back_pay_limit_year': 36000, // руб
            'cost_of_services': 6000, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': true, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 30000, // Критерий 1 - Сумма трат (для бемплатного обслуживания)

            'criterion_2_residue_level_per_year': true, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 300000, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '113': {
            'id': 113,
            'name': 'Райффайзен',
            'logo_file': 'raiffeisen_bank_logo.png',
            'card_category': 'Visa Gold',
            'card_type': 'Кредитная',
            'program_name': '#ВСЁСРАЗУ',
            'cash_back_other_categories': 0, // %
            'cash_back_restaurant': 0, // %
            'cash_back_gas_stations': 0, // %
            'cash_back_travel': 0, // %
            'cash_back_clothes': 0, // %
            'cash_back_superstore': 0, // %
            'cash_back_pay_limit_month': 8333, // руб
            'cash_back_pay_limit_year': 100000, // руб
            'cost_of_services': 1490, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '114': {
            'id': 114,
            'name': 'Россельхозбанк',
            'logo_file': 'rosselhoz_bank_logo.png',
            'card_category': 'Visa Instant',
            'card_type': 'Кредитная',
            'program_name': 'Карта Хозяина',
            'cash_back_other_categories': 1, // %
            'cash_back_restaurant': 1, // %
            'cash_back_gas_stations': 5, // %
            'cash_back_travel': 1, // %
            'cash_back_clothes': 1, // %
            'cash_back_superstore': 1, // %
            'cash_back_pay_limit_month': 15000, // руб
            'cash_back_pay_limit_year': 180000, // руб
            'cost_of_services': 400, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '115': {
            'id': 115,
            'name': 'Россельхозбанк',
            'logo_file': 'rosselhoz_bank_logo.png',
            'card_category': 'Visa Classic / MasterCard Standard',
            'card_type': 'Кредитная',
            'program_name': 'Карта Хозяина',
            'cash_back_other_categories': 1, // %
            'cash_back_restaurant': 1, // %
            'cash_back_gas_stations': 5, // %
            'cash_back_travel': 1, // %
            'cash_back_clothes': 1, // %
            'cash_back_superstore': 1, // %
            'cash_back_pay_limit_month': 15000, // руб
            'cash_back_pay_limit_year': 180000, // руб
            'cost_of_services': 900, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)

            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год
            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)

            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': true, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        },

        '116': {
            'id': 116,
            'name': 'Кредит Европа Банк',
            'logo_file': 'kredit_europe_bank_logo.png',
            'card_category': 'MasterCard Standard',
            'card_type': 'Кредитная',
            'program_name': 'CARD CREDIT Gold',
            'cash_back_other_categories': 2, // %
            'cash_back_restaurant': 2, // %
            'cash_back_gas_stations': 2, // %
            'cash_back_travel': 2, // %
            'cash_back_clothes': 2, // %
            'cash_back_superstore': 2, // %
            'cash_back_pay_limit_month': 1000, // руб
            'cash_back_pay_limit_year': 12000, // руб
            'cost_of_services': 350, // руб
            'wellcome_points': 0, // %

            'criterion_1_pay_level_in_month': false, // Критерий 1 - Уровень затрат по карте в месяц
            'criterion_1_pay_sum': 0, // Критерий 1 - Сумма трат (для бемплатного обслуживания)
            'criterion_2_residue_level_per_year': false, // Критерий 2 - Уровень остатка на счету в год

            'criterion_2_residue_level': 0, // Критерий 2 - Уровень остатка (для бесплатного обслуживания в год)
            'criterion_3_the_conversion_of_wages_at_the_expense_of': false, // Критерий 3 - Переведение зарплаты на счет
            'criterion_4_having_an_open_contribution': false, // Критерий 4 - Наличие открытого вклада
            'criterion_are_cumulative': false, // Критерии совокупны

            'the_first_year_for_free': false, // Первый год бесплатно
            'the_cost_of_card_issuance': 0, // Стоимость выпуска карты
        }





    }

};