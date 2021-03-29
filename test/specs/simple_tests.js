describe("simple tests to create a report", () => {
  it("Page title should be correct", async () => {
    await browser.url("");
    await browser.maximizeWindow();
    const actualTitle = await browser.getTitle();
    expect(actualTitle).toEqual(
      "EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії і робота для розробників ПЗ",
      "Incorrect page title"
    );
  });
  it("Should be taken to vacancies page when clicking on it in header", async () => {
    const vacancies = await $('.top-navigation__item-link[href="/vacancies"]');
    await vacancies.click();
    const currentLink = await browser.getUrl();
    expect(currentLink).toEqual(
      "https://careers.epam.ua/vacancies",
      "incorrect redirect link"
    );
  });

  it("Should contain JavaScript it all items with such search criteria", async () => {
    const keyWordInput = await $(
      ".recruiting-search__column #new_form_job_search-keyword"
    );
    await keyWordInput.setValue("Javascript");
    const searchBtn = $('button[type="submit"]');
    await searchBtn.click();
    await $("li .search-result__item-name").waitForDisplayed();
    const result = await $("li .search-result__item-name");
    expect(await result.getText()).toBeTruthy();
  });
});
