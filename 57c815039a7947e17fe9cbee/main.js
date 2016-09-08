
var order_after = [];

function recalc_user_input (only_one_string) {

    // Доход
    var earnings = parseFloat($('[name="earnings"]').val());
    // Остаток
    var amount_debit_card = parseFloat($('[name="amount_debit_card"]').val());
    // Процент - супермаркеты
    var amount_superstore_percents = parseFloat($('[name="user_input_amount_superstore"]').val());
    // Одежда
    var amount_clothes_percents = parseFloat($('[name="user_input_amount_clothes"]').val());
    // Путешествия
    var amount_travel_percents = parseFloat($('[name="user_input_amount_travel"]').val());
    // АЗС
    var amount_azs_percents = parseFloat($('[name="user_input_amount_azs"]').val());
    // Рестораны
    var amount_restaurant_percents = parseFloat($('[name="user_input_amount_restaurant"]').val());
    // Остальные покупки
    var amount_other_purchases_percents = parseFloat($('[name="user_input_amount_other_purchases"]').val());

    if (!amount_superstore_percents) {
        amount_superstore_percents = 0;
    }
    if (!amount_clothes_percents) {
        amount_clothes_percents = 0;
    }
    if (!amount_travel_percents) {
        amount_travel_percents = 0;
    }
    if (!amount_azs_percents) {
        amount_azs_percents = 0;
    }
    if (!amount_restaurant_percents) {
        amount_restaurant_percents = 0;
    }
    if (!amount_other_purchases_percents) {
        amount_other_purchases_percents = 0;
    }

    // --------------------- Супермаркеты
    var amount_superstore = Math.round(amount_debit_card / 100 * amount_superstore_percents);
    $('[name="amount_superstore"]').val(amount_superstore);
    $('#amount_superstore_by_year').html(amount_superstore * 12);
    $('#amount_superstore_by_month').html(amount_superstore);
    // --------------------- Одежда
    var amount_clothes = Math.round(amount_debit_card / 100 * amount_clothes_percents);
    $('[name="amount_clothes"]').val(amount_clothes);
    $('#amount_clothes_by_year').html(amount_clothes * 12);
    $('#amount_clothes_by_month').html(amount_clothes);
    // --------------------- Путешествия
    var amount_travel = Math.round(amount_debit_card / 100 * amount_travel_percents);
    $('[name="amount_travel"]').val(amount_travel);
    $('#amount_travel_by_year').html(amount_travel * 12);
    $('#amount_travel_by_month').html(amount_travel);
    // --------------------- Заправки
    var amount_azs = Math.round(amount_debit_card / 100 * amount_azs_percents);
    $('[name="amount_azs"]').val(amount_azs);
    $('#amount_azs_by_year').html(amount_azs * 12);
    $('#amount_azs_by_month').html(amount_azs);
    // --------------------- Рестораны
    var amount_restaurant = Math.round(amount_debit_card / 100 * amount_restaurant_percents);
    $('[name="amount_restaurant"]').val(amount_restaurant);
    $('#amount_restaurant_by_year').html(amount_restaurant * 12);
    $('#amount_restaurant_by_month').html(amount_restaurant);
    // --------------------- Остальные покупки
    var amount_other_purchases = Math.round(amount_debit_card / 100 * amount_other_purchases_percents);
    $('[name="amount_other_purchases"]').val(amount_other_purchases);
    $('#amount_other_purchases_by_year').html(amount_other_purchases * 12);
    $('#amount_other_purchases_by_month').html(amount_other_purchases);

    // --------------------- Остаток на счете
    //var level_of_the_average_monthly_balance_in_the_account_per_month = parseFloat($('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val());
    //var level_of_the_average_monthly_balance_in_the_account_per_month_percents = level_of_the_average_monthly_balance_in_the_account_per_month / ( earnings / 100 );
    //level_of_the_average_monthly_balance_in_the_account_per_month_percents = Math.round(level_of_the_average_monthly_balance_in_the_account_per_month_percents * 100) / 100;
    //
    //if (level_of_the_average_monthly_balance_in_the_account_per_month_percents < 1.0) {
    //    level_of_the_average_monthly_balance_in_the_account_per_month_percents = 0;
    //}

    //$('#level_of_the_average_monthly_balance_in_the_account_per_month_by_year').html(level_of_the_average_monthly_balance_in_the_account_per_month_percents);
    //$('#level_of_the_average_monthly_balance_in_the_account_per_month_by_year').html(level_of_the_average_monthly_balance_in_the_account_per_month * 12);
    //console.log(amount_superstore_percents,amount_clothes_percents,amount_travel_percents,amount_azs_percents,amount_restaurant_percents,amount_restaurant_percents)
    // --------------------- Пересчитываем банки
    resumming_amount();
}

/**
 * Пересчитываем общую сумму всех затрат
 */
function resumming_amount () {

    if ($('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').data('mark-change') != 1) {

        // Остаток
        var amount_debit_card = parseFloat($('[name="amount_debit_card"]').val());
        var earnings = $('[name="earnings"]').val();

        $('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val(earnings - amount_debit_card);
        $('#level_of_the_average_monthly_balance_in_the_account_per_month_by_year').html( (earnings - amount_debit_card) * 12);
        var percents_average = (earnings - amount_debit_card) / ( earnings / 100 );
        percents_average = Math.round(percents_average * 100) / 100;
        if (percents_average < 1.0) {
            percents_average = Math.ceil(percents_average);
        }
        $('#level_of_the_average_monthly_balance_in_the_account_per_month_percent').html(percents_average);
    }

    calc_and_render_table('debit');
    calc_and_render_table('credit');

}

/**
 * Рассчитываем показатели для банка
 */
function re_calculation_bank (group, bank_id) {

    if (!cards_info[group][bank_id]) {
        return false;
    }

    var bank = cards_info[group][bank_id];

    var result = {
        'superstore': 0,
        'clothes': 0,
        'travel': 0,
        'azs': 0,
        'restaurant': 0,
        'other_purchases': 0,
        'cash_back_wellcome_points_first_year': 0,
        'cash_back_wellcome_points_second_year': 0,
        'free_account_maintenance_on_customer_profile': false,
    };

    var userInput = {
        'superstore': parseFloat($('[name="amount_superstore"]').val()),
        'clothes': parseFloat($('[name="amount_clothes"]').val()),
        'travel': parseFloat($('[name="amount_travel"]').val()),
        'azs': parseFloat($('[name="amount_azs"]').val()),
        'restaurant': parseFloat($('[name="amount_restaurant"]').val()),
        'other_purchases': parseFloat($('[name="amount_other_purchases"]').val()),
    };

    var userInputRecount = {
        'superstore': parseFloat($('#amount_superstore_by_year').html()),
        'clothes': parseFloat($('#amount_clothes_by_year').html()),
        'travel': parseFloat($('#amount_travel_by_year').html()),
        'azs': parseFloat($('#amount_azs_by_year').html()),
        'restaurant': parseFloat($('#amount_restaurant_by_year').html()),
        'other_purchases': parseFloat($('#amount_other_purchases_by_year').html())
    };

    var amount_debit_card_by_year = parseFloat($('#amount_debit_card_by_year').html());
    var amount_debit_card = parseFloat($('[name="amount_debit_card"]').val());

    result.superstore = userInputRecount.superstore  / 100 * bank['cash_back_superstore'];
    result.clothes = userInputRecount.clothes  / 100 * bank['cash_back_clothes'];
    result.travel = userInputRecount.travel  / 100 * bank['cash_back_travel'];
    result.azs = userInputRecount.azs  / 100 * bank['cash_back_gas_stations'];
    result.restaurant = userInputRecount.restaurant  / 100 * bank['cash_back_restaurant'];
    result.other_purchases = userInputRecount.other_purchases  / 100 * bank['cash_back_other_categories'];

    // Карта Ferrari банка Кредит Европа
    // 2% - если общая сумма покупок в месяц до 29 999, если 30 000 и больше - 5% на АЗС
    if (bank_id == 109) {
        if (amount_debit_card > 29999) {
            result.azs = userInputRecount.azs  / 100 * 5;
        }
    }

    // Особое условие для банка Росбанк (сверхкарта)
    // по сверхкарте - заложить ограничение на минимальную сумму трат по карте для выплаты вознаграждения (20000 руб/мес.)
    if (bank_id == 11) {
        if (amount_debit_card < 20000) {
            result.superstore = 0;
            result.clothes = 0;
            result.travel = 0;
            result.azs = 0;
            result.restaurant = 0;
            result.other_purchases = 0;
        }
    }

    // Сумма кэшбэк в год по группам
    result.cash_back_summ_by_year = result.superstore + result.clothes + result.travel + result.azs + result.restaurant + result.other_purchases;
    // Сумма кэшбэк в месяц по группам
    result.cash_back_summ_by_month = result.cash_back_summ_by_year / 12;


    // Сумма приветственных бонусов - Росбанк (сверхкарта+)
    if (bank_id == 11) {
        // =G17/12*3*(O55-G55)+I17/12*3*(O55-I55)+J17/12*3*(O55-J55)+K17/12*3*(O55-K55)+L17/12*3*(O55-L55)
        result.cash_back_wellcome_points_first_year =
            userInput.other_purchases * 3 * ((bank['wellcome_points']/100 - bank['cash_back_other_categories']/100)) +
            userInput.azs * 3 * ((bank['wellcome_points']/100 - bank['cash_back_gas_stations']/100)) +
            userInput.travel * 3 * ((bank['wellcome_points']/100 - bank['cash_back_travel']/100)) +
            userInput.clothes * 3 * ((bank['wellcome_points']/100 - bank['cash_back_clothes']/100)) +
            userInput.superstore * 3 * ((bank['wellcome_points']/100 - bank['cash_back_superstore']/100));
    }

    // Особые условия - раиффайзен банк - своя формула пересчета кэшшбэк и кэшшбэк + бонусы
    if (bank_id == 113) {
        var raif = raiffaisen_card_special_recount(amount_debit_card_by_year);
        // Сумма кэшбэк в год
        result.cash_back_summ_by_year = raif.possible_amount_of_cashback_per_year_excluding_bonuses;
        // Сумма кэшбэк в месяц
        result.cash_back_summ_by_month = result.cash_back_summ_by_year / 12;
        // Сумма приветственных бонусов
        result.cash_back_wellcome_points_first_year = raif.the_amount_of_the_annual_bonus_in_rubles;
        result.cash_back_wellcome_points_second_year = raif.the_amount_of_the_annual_bonus_in_rubles;
    }

    // Сумма кэшбэк + бонусы за первый и второй год
    result.cash_back_summ_and_bonus_by_first_year = result.cash_back_summ_by_year + result.cash_back_wellcome_points_first_year;
    result.cash_back_summ_and_bonus_by_second_year = result.cash_back_summ_by_year + result.cash_back_wellcome_points_second_year;

    // Ситибанк - Особые условия
    // 10% от годовой выплаты кэшбэк
    if (bank_id == 108) {
        result.cash_back_summ_and_bonus_by_first_year = result.cash_back_summ_and_bonus_by_first_year + (result.cash_back_summ_and_bonus_by_first_year/10);
        result.cash_back_summ_and_bonus_by_second_year = result.cash_back_summ_and_bonus_by_second_year + (result.cash_back_summ_and_bonus_by_second_year/10);
    }


    // Считаем, ограничения по выплате кэшбэк в месяц
    if (result.cash_back_summ_by_month >= bank['cash_back_pay_limit_month']) {
        result.cash_back_limit_by_month = bank['cash_back_pay_limit_month'];
    } else {
        result.cash_back_limit_by_month = 0;
    }

    // Ограничения по выплате в год
    result.cash_back_limit_by_year = result.cash_back_limit_by_month * 12;

    // Сумма кэшбэк в год с учетом бонусов и ограничений по выплатам - 1 год
    // =IF(T25=0,Q25,IF(Q25>T25,T25,Q25))
    if (result.cash_back_limit_by_year == 0) {
        result.cash_back_and_bonus_and_limit_first_year = result.cash_back_summ_and_bonus_by_first_year;
    } else {
        if (result.cash_back_summ_and_bonus_by_first_year >= result.cash_back_limit_by_year) {
            result.cash_back_and_bonus_and_limit_first_year = result.cash_back_limit_by_year;
        } else {
            result.cash_back_and_bonus_and_limit_first_year = result.cash_back_summ_and_bonus_by_first_year;
        }
    }

    // Сумма кэшбэк в год с учетом бонусов и ограничений по выплатам - 2 год
    if (result.cash_back_limit_by_year == 0) {
        result.cash_back_and_bonus_and_limit_second_year = result.cash_back_summ_and_bonus_by_second_year;
    } else {
        if (result.cash_back_summ_and_bonus_by_second_year >= result.cash_back_limit_by_year) {
            result.cash_back_and_bonus_and_limit_second_year = result.cash_back_limit_by_year;
        } else {
            result.cash_back_and_bonus_and_limit_second_year = result.cash_back_summ_and_bonus_by_second_year;
        }
    }

    // Высчитываем обслуживание счета по профилю клиента (Бесплатное)
    // =IF(OR(IF(Z25="ДА",IF(M$17>AA25,1,0),0),IF(AB25="ДА",IF(N$17>AC25,1,0),0),IF(AD25="ДА",IF(O$17="ДА",1,0),0),IF(AE25="ДА",IF(P$17="ДА",1,0),0))=1,"БЕСПЛАТНО","ПЛАТНО")
    if (bank.criterion_1_pay_level_in_month) {
        if (amount_debit_card >= bank.criterion_1_pay_sum) {
            result.free_account_maintenance_on_customer_profile = true;
        }
    }

    if (bank.criterion_2_residue_level_per_year) {
        if ($('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val() >= bank.criterion_2_residue_level) {
            result.free_account_maintenance_on_customer_profile = true;
        }
    }

    if (bank.criterion_3_the_conversion_of_wages_at_the_expense_of) {
        if ( $('[name="the_conversion_of_salary_to_the_card_account"]:checked').val() == 1 ) {
            result.free_account_maintenance_on_customer_profile = true;
        }
    }

    if (bank.criterion_4_having_an_open_contribution) {
        if ( $('[name="having_an_open_contribution"]:checked').val() == 1 ) {
            result.free_account_maintenance_on_customer_profile = true;
        }
    }

    // Стоимость обслуживания по профилю клиента
    if (result.free_account_maintenance_on_customer_profile) {
        // Бесплатно
        result.cost_of_service_for_the_customer_profile = 0;
    } else {
        // Платно
        result.cost_of_service_for_the_customer_profile = bank.cost_of_services;
    }

    // Альфа - бесплатное обслужитвание счета после 70 000 рублей остатка
    if (bank_id == 6) {
        if ($('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val() >= 70000) {
            // Стоимость обслуживания счета за 1 год
            result.cost_of_service_for_the_customer_profile = 0;
        }
    }

    // Альфа - бесплатное обслужитвание счета после 300 000 рублей остатка
    if (bank_id == 24) {// 40 000
        if ($('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val() >= 300000) {
            // Стоимость обслуживания счета за 1 год
            result.cost_of_service_for_the_customer_profile = 0;
        }
    }

    // Особое условие для "ВТБ - Банк Москвы"
    // Первый год - полцены
    if (bank_id == 111) {
        bank.the_first_year_for_free = false;
    }

    // Стоимость обслуживания счета за 1 год (по профилю)
    // =IF(AI25="ДА",0,AH25)
    if (bank.the_first_year_for_free) {
        result.account_service_fee_on_a_profile_per_first_year = 0;
    } else {
        result.account_service_fee_on_a_profile_per_first_year = result.cost_of_service_for_the_customer_profile;
    }

    // Стоимость обслуживания счета за 2 год (по профилю)
    result.account_service_fee_on_a_profile_per_second_year = result.cost_of_service_for_the_customer_profile;

    // Особое условие для "ВТБ - Банк Москвы"
    // Первый год - полцены
    if (bank_id == 111) {
        result.account_service_fee_on_a_profile_per_first_year = result.account_service_fee_on_a_profile_per_first_year / 2;
    }

    // 1 год - 350 ₽, последующие - 700 ₽
    // Особые условия для "Кредит европа банк"
    if (bank_id == 116) {
        result.account_service_fee_on_a_profile_per_second_year = result.account_service_fee_on_a_profile_per_second_year + 350;
    }

    // Особое условие для "Промсвязьбанк"
    // Первый год - платно. Второй -бесплатно, если за предыдущий год поддерживался
    // минимальный неснижаемый остаток по Счету более 50 000 рублей РФ/1500 USD/1500 EUR.
    if (bank_id == 22) {
        if ($('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val() >= 50000) {
            // Стоимость обслуживания счета за 2 год (по профилю)
            result.account_service_fee_on_a_profile_per_second_year = 0;
        }
        result.account_service_fee_on_a_profile_per_first_year = bank.cost_of_services;
        result.free_account_maintenance_on_customer_profile = false;
    }

    if (bank_id == 1) {
        result.account_service_fee_on_a_profile_per_second_year = result.account_service_fee_on_a_profile_per_second_year + 350;
    }

    // Стоимость обслуживания счета и карты 1 год
    result.the_cost_of_account_maintenance_and_card_per_first_year = result.account_service_fee_on_a_profile_per_first_year + bank.the_cost_of_card_issuance;
    // Стоимость обслуживания счета и карты 2 год
    result.the_cost_of_account_maintenance_and_card_per_second_year = result.account_service_fee_on_a_profile_per_second_year;

    // Чистая выгода - 1 год
    result.grand_cashback_first_year = result.cash_back_and_bonus_and_limit_first_year - result.the_cost_of_account_maintenance_and_card_per_first_year;
    // Чистая выгода - 2 год
    result.grand_cashback_second_year = result.cash_back_and_bonus_and_limit_second_year - result.the_cost_of_account_maintenance_and_card_per_second_year;

    result.bank = bank;

    // Округляшечки
    result.superstore = Math.round(result.superstore);
    result.clothes = Math.round(result.clothes);
    result.travel = Math.round(result.travel);
    result.azs = Math.round(result.azs);
    result.restaurant = Math.round(result.restaurant);
    result.other_purchases = Math.round(result.other_purchases);
    result.cash_back_summ_by_month = Math.round(result.cash_back_summ_by_month);
    result.cash_back_summ_by_year = Math.round(result.cash_back_summ_by_year);
    result.cash_back_summ_and_bonus_by_second_year = Math.round(result.cash_back_summ_and_bonus_by_second_year);
    result.cash_back_summ_and_bonus_by_first_year = Math.round(result.cash_back_summ_and_bonus_by_first_year);
    result.cash_back_limit_by_month = Math.round(result.cash_back_limit_by_month);
    result.cash_back_limit_by_year = Math.round(result.cash_back_limit_by_year);
    result.cash_back_and_bonus_and_limit_first_year = Math.round(result.cash_back_and_bonus_and_limit_first_year);
    result.cash_back_and_bonus_and_limit_second_year = Math.round(result.cash_back_and_bonus_and_limit_second_year);
    result.cost_of_service_for_the_customer_profile = Math.round(result.cost_of_service_for_the_customer_profile);
    result.account_service_fee_on_a_profile_per_first_year = Math.round(result.account_service_fee_on_a_profile_per_first_year);
    result.account_service_fee_on_a_profile_per_second_year = Math.round(result.account_service_fee_on_a_profile_per_second_year);
    result.the_cost_of_account_maintenance_and_card_per_first_year = Math.round(result.the_cost_of_account_maintenance_and_card_per_first_year);
    result.the_cost_of_account_maintenance_and_card_per_second_year = Math.round(result.the_cost_of_account_maintenance_and_card_per_second_year);
    result.grand_cashback_first_year = Math.round(result.grand_cashback_first_year);
    result.grand_cashback_first_year_f = (result.grand_cashback_first_year).formatMoney(0, '.', ',');
    result.grand_cashback_second_year = Math.round(result.grand_cashback_second_year);

    return result;

}

function calc_and_render_table (group) {

    var order_before = [];
    var resss = [];
    $.each(cards_info[group], function(k,v){
        var res = re_calculation_bank(group, k);
        resss.push(res);
        order_before.push(k);
    });

    resss.sort_by_key('grand_cashback_first_year', 1);

    var z = 1;
    for (var i in resss) {
        resss[i].rate_position = z++;
        if (resss[i].grand_cashback_first_year < 0) {
            resss[i].color = '#800000';
        } else if (resss[i].grand_cashback_first_year > 0) {
            resss[i].color = '#63b245';
        } else {
            resss[i].color = '#000';
        }
    }

    // // Предрезультаты
    //var pre_result_rows_template = $("#pre-result-rows-template").html();
    //pre_result_rows_template = _.template(pre_result_rows_template);
    //pre_result_rows_template = pre_result_rows_template({"data": {"rows":resss}});
    //if (group == 'debit') {
    //    $('#table-for-pre-results').html(pre_result_rows_template);
    //} else {
    //    $('#table-for-pre-results1').html(pre_result_rows_template);
    //}

    // Результаты
    var result_rows_template = $("#result-rows-template").html();
    result_rows_template = _.template(result_rows_template);
    result_rows_template = result_rows_template({"data": {"rows":resss}});
    if (group == 'debit') {
        $('#table-for-results').html(result_rows_template);
    } else {
        $('#table-for-results-credit').html(result_rows_template);
    }

    //if (order_after.length > 0) {
    //    for (var i in order_after) {
    //        var before = order_before.shift();
    //        if (before != order_after[i]) {
    //            $('[data-bank-id="'+i+'"]').css({'background-color':'green'}).animate(function(){
    //
    //            });
    //        }
    //    }
    //}

    check_mobile();

}

/**
 * Рассчет кэшбэк для райфайзен (отдельная заморочка)
 */
function raiffaisen_card_special_recount (amount_card_per_year) {

    var point_base_amount = 50;
    // Срок действия бонусов (месяцев)
    var validity_of_bonuses = 36;
    // Траты в месяц
    var amount_card_per_month = amount_card_per_year / 12;
    // Сумма ежегодных бонусов
    var the_amount_of_annual_bonuses = 500;


    // Пороги для рассчета выгоды
    var groups_limit = {
        500: {
            amount: 500 * point_base_amount, // руб
            profit: 100, // руб
            //percent: 0.4, // %
        },
        4000: {
            amount: 4000 * point_base_amount, // руб
            profit: 4000, // руб
            //percent: 0.4, // %
        },

        20000: {
            amount: 20000 * point_base_amount, // руб
            profit: 50000, // руб
            //percent: 0.4, // %
        },
    };

    groups_limit[500].percent = groups_limit[500].profit / groups_limit[500].amount;
    groups_limit[4000].percent = groups_limit[4000].profit / groups_limit[4000].amount;
    groups_limit[20000].percent = groups_limit[20000].profit / groups_limit[20000].amount;

    // Уровень трат, принимаемый для расчета, с учетом ежегодного бонуса
    var the_level_of_costs_assumed_for_the_calculation = ( the_amount_of_annual_bonuses * point_base_amount ) + amount_card_per_year;

    // Возможная сумма cashback в год без учета бонусов
    // =INT(J$22/J$15)*J$17*J$15+INT(MOD(J$22,J$15)/J$11)*J$11*J$13+INT(MOD(MOD(J$22,J$15),J$11)/J$7)*J$7*J$9
    //
    // =INT(J$22 / J$15) * J$17 * J$15 +
    // INT( MOD(J$22,J$15) / J$11) * J$11 * J$13 +
    // INT( MOD( MOD(J$22,J$15), J$11 ) / J$7) * J$7 * J$9
    //

    var test =
        Math.floor(amount_card_per_year / groups_limit[20000].amount) * groups_limit[20000].percent * groups_limit[20000].amount +
        Math.floor(((amount_card_per_year % groups_limit[20000].amount) / groups_limit[4000].amount)) * groups_limit[4000].amount * groups_limit[4000].percent +
        Math.floor(((amount_card_per_year % groups_limit[20000].amount) % groups_limit[4000].amount ) / groups_limit[500].amount) * groups_limit[500].amount * groups_limit[500].percent;

    var possible_amount_of_cashback_per_year_excluding_bonuses =
        Math.floor(amount_card_per_year / groups_limit[20000].amount) * groups_limit[20000].percent * groups_limit[20000].amount +
        Math.floor(((amount_card_per_year % groups_limit[20000].amount) / groups_limit[4000].amount)) * groups_limit[4000].amount * groups_limit[4000].percent +
        Math.floor(((amount_card_per_year % groups_limit[20000].amount) % groups_limit[4000].amount ) / groups_limit[500].amount) * groups_limit[500].amount * groups_limit[500].percent;

    // Возможная сумма cashback в год с учетом бонусов
    // =INT(J$24/J$15)*J$17*J$15+INT(MOD(J$24,J$15)/J$11)*J$11*J$13+INT(MOD(MOD(J$24,J$15),J$11)/J$7)*J$7*J$9
    var possible_amount_of_cashback_per_year_including_bonuses =
        Math.floor(the_level_of_costs_assumed_for_the_calculation / groups_limit[20000].amount) * groups_limit[20000].percent * groups_limit[20000].amount +
        Math.floor(((the_level_of_costs_assumed_for_the_calculation % groups_limit[20000].amount) / groups_limit[4000].amount)) * groups_limit[4000].amount * groups_limit[4000].percent +
        Math.floor(((the_level_of_costs_assumed_for_the_calculation % groups_limit[20000].amount) % groups_limit[4000].amount ) / groups_limit[500].amount) * groups_limit[500].amount * groups_limit[500].percent;

    // Сумма ежегодного бонуса в рублях
    var the_amount_of_the_annual_bonus_in_rubles = possible_amount_of_cashback_per_year_including_bonuses - possible_amount_of_cashback_per_year_excluding_bonuses;

    return {
        'possible_amount_of_cashback_per_year_excluding_bonuses': possible_amount_of_cashback_per_year_excluding_bonuses,
        the_amount_of_the_annual_bonus_in_rubles: the_amount_of_the_annual_bonus_in_rubles
    };

    // Возможная сумма cashback за срок действия программы без учета бонусов
    // =INT(J$22*J$20/12/J$15)*J$17*J$15+INT(MOD(J$22*J$20/12,J$15)/J$11)*J$11*J$13+INT(MOD(MOD(J$22*J$20/12,J$15),J$11)/J$7)*J$7*J$9
    var possible_amount_of_cashback_program_term_excluding_bonuses =
        Math.floor(amount_card_per_year * validity_of_bonuses/12 / groups_limit[20000].amount) * groups_limit[20000].percent * groups_limit[20000].amount +
        Math.floor(((amount_card_per_year * (validity_of_bonuses/12) % groups_limit[20000].amount) / groups_limit[4000].amount)) * groups_limit[4000].amount * groups_limit[4000].percent +
        Math.floor( ((amount_card_per_year * (validity_of_bonuses/12) % groups_limit[20000].amount) % groups_limit[4000].amount ) / groups_limit[500].amount) * groups_limit[500].amount * groups_limit[500].percent

    // ИТОГО Возможная сумма cashback за срок действия программы
    // =INT(J$24*J$20/12/J$15)*J$17*J$15+INT(MOD(J$24*J$20/12,J$15)/J$11)*J$11*J$13+INT(MOD(MOD(J$24*J$20/12,J$15),J$11)/J$7)*J$7*J$9
    var possible_amount_of_cashback_program_term_including_bonuses =
        Math.floor(the_level_of_costs_assumed_for_the_calculation * validity_of_bonuses/12 / groups_limit[20000].amount) * groups_limit[20000].percent * groups_limit[20000].amount +
        Math.floor(((the_level_of_costs_assumed_for_the_calculation * (validity_of_bonuses/12) % groups_limit[20000].amount) / groups_limit[4000].amount)) * groups_limit[4000].amount * groups_limit[4000].percent +
        Math.floor( ((the_level_of_costs_assumed_for_the_calculation * (validity_of_bonuses/12) % groups_limit[20000].amount) % groups_limit[4000].amount ) / groups_limit[500].amount) * groups_limit[500].amount * groups_limit[500].percent


}

$(function(){

    $('#sub-user-info-button').on('click', function(){
        $('#addition-settings-block').show();
    });

    $('body').on('keyup', '.user_input, [name="earnings"]', function(){
        recalc_user_input();
    }).on('change', '[name="the_conversion_of_salary_to_the_card_account"], [name="having_an_open_contribution"]', function(){
        recalc_user_input();
    }).on('keyup', '[name="amount_debit_card"]', function(){
        var earnings = parseFloat($('[name="earnings"]').val());
        var val = parseFloat($(this).val());
        var percent = val / ( earnings / 100 );
        $('#amount_debit_card_by_year').html(val*12);
        $('#slider_amount_debit_card').slider({'value': percent});
        //recalc_user_input();
    }).on('focusin', '.user_input', function(){
        var val = parseFloat($(this).val());
        if (!val) {
            val = 0;
        }
        $(this).val( val );
    }).on('focusout', '.user_input', function(){
        var val = parseFloat($(this).val());
        if (!val) {
            val = 0;
        }
        $(this).val(val  + '%' );
    }).on('keyup', '[name="level_of_the_average_monthly_balance_in_the_account_per_month"]', function(){ // Метим, что другие изменения не должны влиять на остаток, так как пользователь вручную вводил данные
        $(this).data('mark-change', 1);
        // ------- Высчитываем остаток
        var earnings = parseFloat($('[name="earnings"]').val());
        var level_of_the_average_monthly_balance_in_the_account_per_month = $('[name="level_of_the_average_monthly_balance_in_the_account_per_month"]').val();
        $('#level_of_the_average_monthly_balance_in_the_account_per_month_by_year').html( level_of_the_average_monthly_balance_in_the_account_per_month * 12);
        var percents_average = level_of_the_average_monthly_balance_in_the_account_per_month / ( earnings / 100 );
        percents_average = Math.round(percents_average * 100) / 100;
        if (percents_average < 1.0) {
            percents_average = '0';
        }
        $('#level_of_the_average_monthly_balance_in_the_account_per_month_percent').html(percents_average);
        recalc_user_input();
    }).on('click', '#click-to-debet-tab', function(){ // Клик на вкладку дебетовых карт
        $('.article__inline-table__trigger').removeClass('active');
        $('.rate-description').hide().removeClass('active');
        $('.article__inline-table__plus').show();
        $('.article__inline-table__minus').hide();
        $('#click-to-credit-tab').removeClass('active');
        $('#click-to-debet-tab').addClass('active');
        $('#debet-table').show();
        $('#credit-table').hide();
        return false;
    }).on('click', '#click-to-credit-tab', function(){ // Клик на вкладку кредитных карт
        $('.article__inline-table__trigger').removeClass('active');
        $('.rate-description').hide().removeClass('active');
        $('.article__inline-table__plus').show();
        $('.article__inline-table__minus').hide();
        $('#click-to-credit-tab').addClass('active');
        $('#click-to-debet-tab').removeClass('active');
        $('#debet-table').hide();
        $('#credit-table').show();
        return false;
    }).on('click', '.article__inline-table__trigger', function(){ // Клик по строке - показываем описания
        if ($(this).hasClass('active')) {
            $('.article__inline-table__trigger').removeClass('active');
            $('.rate-description').hide().removeClass('active');
            var rate = $('.article__inline-table__plus', this).data('rate');
            $('.article__inline-table__plus').show();
            $('.article__inline-table__minus').hide();
            $('.article__inline-table__minus', this).hide();
            $('.article__inline-table__plus', this).show();
        } else {
            $('.article__inline-table__trigger').removeClass('active');
            $(this).addClass('active');
            $('.rate-description').hide();
            var rate = $('.article__inline-table__minus', $(this)).data('rate');
            $('.article__inline-table__plus').show();
            $('.article__inline-table__minus').hide();
            $('.rate-description[data-rate="'+rate+'"]').show().addClass('active');
            $('.article__inline-table__plus', this).hide();
            $('.article__inline-table__minus', this).show();
        }
    }).on('click', '.addition-settings-block-close', function(){
        $('#addition-settings-block').hide();
    });

    $('#slider_amount_debit_card').slider({
        value: parseFloat($('#amount_debit_card_percents').html()),
        //step: 100,
        slide: function( event, ui ) {
            var all = $('[name="earnings"]').val();
            var z = (all/100) * ui.value;
            z = Math.round(z);
            $('[name="amount_debit_card"]').val(z);
        },
        change: function( event, ui ) {

            if (event.originalEvent) {
                // Событие прилетело из слайдера
                var all = $('[name="earnings"]').val();
                var z = (all/100) * ui.value;
                z = Math.round(z);
                $('[name="amount_debit_card"]').val(z);
            } else {
                // Событие прилетело из инпута
            }

            recalc_user_input();
        },
        create: function( event, ui ) {
            $(".ui-slider-handle").show().css("background",'grey url("./images/ig-culc-btn.png") 50% 50% repeat-x');
        }
    });

    $('#addition-settings-block').css({
        'top': parseInt($('#sub-user-info-button').offset().top) - 20 + 'px',
    });
    recalc_user_input();
});

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

Array.prototype.sort_by_key = function(key, direction){
    if (direction == 1) {
        this.sort(function(a, b){
            if(a[key] < b[key]){
                return 1;
            }else if(a[key] > b[key]){
                return -1;
            }
            return 0;
        });
    } else {
        this.sort(function(a, b){
            if(a[key] < b[key]){
                return -1;
            }else if(a[key] > b[key]){
                return 1;
            }
            return 0;
        });
    }
}

function check_mobile () {
    if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
        $('.mobile-info-hide').attr('colspan', 2);
        $('.mobile-hide').hide();
        $('.mobile-info').show();
    } else {
        $('.mobile-info-hide').attr('colspan', 4);
        $('.mobile-hide').show();
        $('.mobile-info').hide();
    }
}